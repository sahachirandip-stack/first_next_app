import Link from "next/link"
import Navigattion from "./Navigattion";

const Header = ()=>{
    return(
        
<header>

    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">

        <div className="container">

            <Link className="navbar-brand" href="/">

                <img
                    src="https://placehold.co/300x100?text=LOGO"
                    alt="Company Logo"/>

            </Link>


            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainMenu"
                aria-controls="mainMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
            ><span className="navbar-toggler-icon"></span></button>


            <div
                className="collapse navbar-collapse"
                id="mainMenu"
            >
                    <Navigattion/>

            </div>

        </div>

    </nav>

</header>

    )
}
export default Header;