import New from "./New"
import Search from "./Search"

const Menu = () : JSX.Element => {
    return (
        <div>
            <h1>Payments</h1>
            <Search />
            <New />
        </div>
    )
}

export default Menu