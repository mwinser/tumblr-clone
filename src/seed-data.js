export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'nA8JsnyxGRM0N5MJHeddFT3t4Az1',
        username: 'winser',
        fullName: 'Mike Winser',
        emailAddress: 'mike.winsern@gmail.com',
        following: ['2'],
        followers: ['2', '3', '4'],
        avatar: '1',
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'raphael',
        fullName: 'Raffaello Sanzio da Urbino',
        emailAddress: 'raphael@sanzio.com',
        following: [],
        followers: ['nA8JsnyxGRM0N5MJHeddFT3t4Az1'],
        avatar: '2',
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'dali',
        fullName: 'Salvador Dalí',
        emailAddress: 'salvador@dali.com',
        following: [],
        followers: ['nA8JsnyxGRM0N5MJHeddFT3t4Az1'],
        avatar: '3',
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'orwell',
        fullName: 'George Orwell',
        emailAddress: 'george@orwell.com',
        following: [],
        followers: ['nA8JsnyxGRM0N5MJHeddFT3t4Az1'],
        avatar: '4',
        dateCreated: Date.now()
      }
    ];
  
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/${i}.jpg`,
          caption: 'A cool shot',
          likes: [],
          comments: [
            {
              displayName: 'dali',
              comment: 'reminds me of a dream I once had'
            },
            {
              displayName: 'orwell',
              comment: 'Would you mind if I used this picture?'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }
  