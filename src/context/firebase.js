import { createContext, useContext } from 'react';

const FirebaseContext = createContext(null);

function useFirebase () {
    return useContext(FirebaseContext)
}

export {FirebaseContext, useFirebase};