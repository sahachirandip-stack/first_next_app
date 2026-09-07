"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navigattion = () => {
    const pathname = usePathname();
  return (
    
                <ul className="navbar-nav ms-auto">

                    <li className="nav-item">
                        <Link
                            className={`nav-link  ${pathname === "/" ? "active" :""}`}
                            href="/"
                        >
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className={`nav-link  ${pathname === "/about" ? "active" :""}`}
                            href="/about"
                        >
                            About
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className={`nav-link  ${pathname === "/services" ? "active" :""}`}
                            href="/services"
                        >
                            Services
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className={`nav-link  ${pathname === "/blog" ? "active" :""}`}
                            href="/blog"
                        >
                            Blog
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className={`nav-link  ${pathname === "/contact" ? "active" :""}`}
                            href="/contact"
                        >
                            Contact
                        </Link>
                    </li>

                </ul>
  )
}

export default Navigattion
