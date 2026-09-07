import Link from "next/link";

const InnerServicePage = async ({ params }) => {
  const { slug } = await params;

  return <>
  
    <section className="py-5">

        <div className="container">

            <div className="row g-5">


                <div className="col-lg-8">

                    <img
                        src="https://placehold.co/1200x700?text=Web+Development"
                        className="img-fluid rounded mb-4"
                        alt="Web Development"
                    />

                    <h2>
                        Professional Web Development Services
                    </h2>

                    <p>
                        We create modern, responsive and
                        high-performance websites for businesses.
                    </p>

                    <p>
                        Our team focuses on creating websites
                        that are fast, user-friendly and optimized
                        for search engines.
                    </p>


                    <h3 className="mt-5">
                        What We Offer
                    </h3>

                    <div className="row mt-3">

                        <div className="col-md-6">

                            <div className="border p-4 mb-4">

                                <h4>
                                    Responsive Design
                                </h4>

                                <p className="mb-0">
                                    Websites that work perfectly
                                    on all devices.
                                </p>

                            </div>

                        </div>


                        <div className="col-md-6">

                            <div className="border p-4 mb-4">

                                <h4>
                                    Fast Performance
                                </h4>

                                <p className="mb-0">
                                    Optimized websites for speed
                                    and performance.
                                </p>

                            </div>

                        </div>


                        <div className="col-md-6">

                            <div className="border p-4 mb-4">

                                <h4>
                                    SEO Friendly
                                </h4>

                                <p className="mb-0">
                                    Structured and optimized for
                                    search engines.
                                </p>

                            </div>

                        </div>


                        <div className="col-md-6">

                            <div className="border p-4 mb-4">

                                <h4>
                                    Ongoing Support
                                </h4>

                                <p className="mb-0">
                                    Support and maintenance for
                                    your website.
                                </p>

                            </div>

                        </div>

                    </div>


                    <h3 className="mt-4">
                        Our Process
                    </h3>

                    <ol className="mt-3">

                        <li className="mb-2">
                            Understanding your requirements
                        </li>

                        <li className="mb-2">
                            Planning the website structure
                        </li>

                        <li className="mb-2">
                            Design and development
                        </li>

                        <li className="mb-2">
                            Testing and launch
                        </li>

                    </ol>

                </div>



                <div className="col-lg-4">

                    <div className="border p-4">

                        <h3>
                            Our Services
                        </h3>

                        <hr/>

                        <ul className="list-group list-group-flush">

                            <li className="list-group-item">

                                <Link
                                    href="service-details"
                                    className="text-decoration-none"
                                >
                                    Web Development
                                </Link>

                            </li>


                            <li className="list-group-item">

                                <Link
                                    href="seo"
                                    className="text-decoration-none"
                                >
                                    SEO Services
                                </Link>

                            </li>


                            <li className="list-group-item">

                                <Link
                                    href="marketing"
                                    className="text-decoration-none"
                                >
                                    Digital Marketing
                                </Link>

                            </li>

                        </ul>

                    </div>



                    <div className="bg-primary text-white p-4 mt-4 rounded">

                        <h3>
                            Need Help?
                        </h3>

                        <p>
                            Contact our team to discuss
                            your project.
                        </p>

                        <Link
                            href="/contact"
                            className="btn btn-light"
                        >
                            Contact Us
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    </section>



    <section className="bg-dark text-white py-5">

        <div className="container text-center">

            <h2>
                Ready To Start Your Project?
            </h2>

            <p>
                Let's discuss your requirements.
            </p>

            <Link
                href="/contact"
                className="btn btn-primary"
            >
                Get Started
            </Link>

        </div>

    </section>
  </>;
};

export default InnerServicePage;