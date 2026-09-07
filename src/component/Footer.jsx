import Link from "next/link"

const Footer = ()=>{
    return (
        
<footer className="bg-dark text-white pt-5">
    <div className="container">
        <div className="row g-4">
            <div className="col-lg-4">
                <Link href="/"><img
                    src="https://placehold.co/300x100?text=LOGO"
                    width="150"
                    alt="Logo"/></Link>

                <p className="text-white-50 mt-3">
                    We provide professional services and
                    digital solutions to help businesses grow.
                </p>
            </div>
            <div className="col-lg-4">
                <h4>
                    Quick Links
                </h4>
                <ul className="list-unstyled">
                    <li className="mb-2">
                        <Link
                            href="/"
                            className="text-white-50"
                        >Home</Link>
                    </li>
                    <li className="mb-2">                        
                        <Link href="/about"
                            className="text-white-50"
                        >
                            About
                        </Link>
                    </li>

                    <li className="mb-2">
                        <Link
                            href="/services"
                            className="text-white-50"
                        >
                            Services
                        </Link>
                    </li>

                    <li className="mb-2">
                        <Link
                            href="/blog"
                            className="text-white-50"
                        >
                            Blog
                        </Link>
                    </li>

                    <li className="mb-2">
                        <Link
                            href="/contact"
                            className="text-white-50"
                        >
                            Contact
                        </Link>
                    </li>

                </ul>

            </div>



            <div className="col-lg-4">

                <h4>
                    Contact Us
                </h4>

                <p className="text-white-50">
                    123 Business Street<br/>
                    Kolkata, India
                </p>

                <p className="text-white-50">
                    Email: info@example.com
                </p>

                <p className="text-white-50">
                    Phone: +91 1234567890
                </p>

            </div>


        </div>


        <hr className="mt-5"/>


        <div className="text-center py-3">

            <p className="mb-0 text-white-50">
                © 2026 My Website. All Rights Reserved.
            </p>

        </div>

    </div>

</footer>


    );
};
export default Footer;