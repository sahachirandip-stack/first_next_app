import Link from "next/link"

const Services = () => {
  return (
   
<section className="section-padding bg-light">

    <div className="container">

        <div className="text-center mb-5">

            <span className="text-primary fw-bold">
                What We Do
            </span>

            <h2 className="display-6 fw-bold mt-2">
                Our Services
            </h2>

            <p className="text-muted">
                Professional services designed for your business.
            </p>

        </div>


        <div className="row g-4">    

            <div className="col-lg-4 col-md-6">

                <div className="card service-card border-0 shadow-sm">

                    <img
                        src="https://placehold.co/800x500?text=Web+Development"
                        className="card-img-top"
                        alt="Web Development"/>

                    <div className="card-body p-4">

                        <h3 className="h4">
                            Web Development
                        </h3>

                        <p className="text-muted">
                            Modern and responsive websites
                            designed for your business.
                        </p>

                        <Link
                            href="/services/web-development"
                            className="btn btn-outline-primary"
                        >
                            Read More
                        </Link>

                    </div>

                </div>

            </div>



            <div className="col-lg-4 col-md-6">

                <div className="card service-card border-0 shadow-sm">

                    <img
                        src="https://placehold.co/800x500?text=SEO"
                        className="card-img-top"
                        alt="SEO"/>

                    <div className="card-body p-4">

                        <h3 className="h4">
                            SEO
                        </h3>

                        <p className="text-muted">
                            Improve your search engine rankings
                            and reach more customers.
                        </p>

                        <Link
                            href="/services/seo"
                            className="btn btn-outline-primary"
                        >
                            Read More
                        </Link>

                    </div>

                </div>

            </div>



            <div className="col-lg-4 col-md-6">

                <div className="card service-card border-0 shadow-sm">

                    <img
                        src="https://placehold.co/800x500?text=Marketing"
                        className="card-img-top"
                        alt="Digital Marketing"/>

                    <div className="card-body p-4">

                        <h3 className="h4">
                            Digital Marketing
                        </h3>

                        <p className="text-muted">
                            Grow your online presence with
                            effective marketing strategies.
                        </p>

                        <Link
                            href="/services/digital-marketing"
                            className="btn btn-outline-primary"
                        >
                            Read More
                        </Link>
                    </div>

                </div>

            </div>


        </div>

    </div>

</section>
  )
}

export default Services
