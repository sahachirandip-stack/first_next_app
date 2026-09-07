import Link from "next/link"

const Banner = () => {
  return (
    
<section className="hero">

    <div className="container">

        <div className="row align-items-center">

            <div className="col-lg-6">

                <span className="text-primary fw-bold">
                    Welcome To Our Website
                </span>

                <h1 className="display-4 fw-bold mt-3">
                    Professional Solutions For Your Business
                </h1>

                <p className="lead mt-4">
                    We provide modern, professional and reliable
                    solutions to help your business grow.
                </p>

                <div className="mt-4">

                    <Link
                        href="about"
                        className="btn btn-primary btn-lg me-2"
                    >
                        Learn More
                    </Link>

                    <Link
                        href="contact"
                        className="btn btn-outline-primary btn-lg"
                    >
                        Contact Us
                    </Link>
                </div>

            </div>


            <div className="col-lg-6 mt-5 mt-lg-0">

                <img
                    src="https://placehold.co/800x600?text=Hero+Image"
                    className="img-fluid"
                    alt="Hero Image"/>

            </div>

        </div>

    </div>

</section>
  )
}

export default Banner
