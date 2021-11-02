export default function MainContainer(props) {
    return (
        <div className={`bg-navy max-w-540px lg:max-w-990px mx-auto mt-10 px-2 flex items-start text-white ${props.column ? "flex-col" : null}`}>
            {props.children}
        </div>
    )
}