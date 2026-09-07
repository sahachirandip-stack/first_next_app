import Link from "next/link"

const About = () => {
  return (
<section className="section-padding">

    <div className="container">

        <div className="row align-items-center">

            <div className="col-lg-6">

                <img
                    src="https://placehold.co/800x600?text=About+Image"
                    className="img-fluid rounded"
                    alt="About Us"/>

            </div>


            <div className="col-lg-6 mt-5 mt-lg-0">

                <span className="text-primary fw-bold">
                    About Us
                </span>

                <h2 className="display-6 fw-bold mt-2">
                    We Help Businesses Grow
                </h2>

                <p className="mt-4">
                    We are a professional company providing
                    high-quality services and solutions for
                    businesses of all sizes.
                </p>

                <p>
                    Our experienced team works closely with
                    clients to understand their requirements
                    and deliver the best possible solutions.
                </p>

                <Link
                    href="about"
                    className="btn btn-primary mt-3"
                >
                    Read More
                </Link>

            </div>

        </div>

    </div>

</section>
  )
}

export default About
