export default function SideBarContainer(props) {
        return(
                <div className="SIDEBAR relative flex-1 max-w-320px flex flex-col flex-start ml-8 w-80">
                    {props.children}
                </div>
        )
}