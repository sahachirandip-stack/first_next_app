import Link from "next/link";

const ContactPage = ()=>{
    return(
<section className="section-padding bg-primary text-white">

    <div className="container">

        <div className="row align-items-center">

            <div className="col-lg-8">

                <h2 className="display-6 fw-bold">
                    Ready To Grow Your Business?
                </h2>

                <p className="mb-0">
                    Contact us today and let's discuss your project.
                </p>

            </div>

            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">

                <Link
                    href="contact.html"
                    className="btn btn-light btn-lg"
                >
                    Get Started
                </Link>

            </div>

        </div>

    </div>

</section>
    )
}
export default ContactPage;