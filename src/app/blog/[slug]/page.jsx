import Image from "next/image";
import Link from "next/link";
import React from "react";

const InnerBlogPage = async ({params}) => {
    const API_URL = process.env.WORDPRESS_API_URL;
const PATH_URL = process.env.API_PATH;
    const {slug} = await params;
  const req = await fetch(
    `${API_URL}${PATH_URL}posts?slug=${slug}&acf_format=standard&_embed=&_fields=id,date,title,excerpt,author,featured_media,categories,_links,_embedded,content`,
  );
  const postdata = await req.json();
  const post = postdata[0];
  console.log(post);

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const categories = post?._embedded?.["wp:term"]?.[0] || [];
    const tags = post?._embedded?.["wp:term"]?.[1] || [];
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <article>{post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (<Image
                                  width={850}
                                  height={500}
                                  src={post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                                  className="card-img-top"
                                  alt={
                                    post?._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
                                    post?.title.rendered
                                  }
                                />)}
                {categories?.map((category)=>(
                    <span key={category.id} className="badge text-bg-warning  mb-3">
                        <Link href={`/category/${category.slug}`} >{category.name}</Link>
                    </span>
                ))}
                

                <h1 className="mb-3">{post?.title.rendered}</h1>

                <div className="text-muted mb-4">
                  <span>By {post?._embedded?.["author"]?.[0]?.name}</span>|<span>{formatDate(post?.date)}</span>
                </div>

               {post?.content.rendered && (<div
                    className="text-muted"
                    dangerouslySetInnerHTML={{
                      __html: post?.content.rendered,
                    }}
                  />)}

                <div className="border-top pt-4 mt-5">
                  <strong>Tags:</strong>
                {tags?.map((tag)=>(
                    <Link key={tag?.id}
                    href={`/tag/${tag?.slug}`}
                    className="badge text-bg-secondary text-decoration-none"
                  >{tag?.name}
                  </Link>
                ))}
                </div>
              </article>
            </div>

            <div className="col-lg-4">
              <div className="border p-4 mb-4">
                <h3>Search</h3>

                <form className="d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />

                  <button className="btn btn-primary ms-2" type="submit">
                    Search
                  </button>
                </form>
              </div>

              <div className="border p-4 mb-4">
                <h3>Categories</h3>

                <hr />

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <Link href="#" className="text-decoration-none">
                      Web Development
                    </Link>
                  </li>

                  <li className="list-group-item">
                    <Link href="#" className="text-decoration-none">
                      SEO
                    </Link>
                  </li>

                  <li className="list-group-item">
                    <Link href="#" className="text-decoration-none">
                      Digital Marketing
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="border p-4">
                <h3>Recent Posts</h3>

                <hr />

                <div className="d-flex mb-3">
                  <img
                    src="https://placehold.co/150x100?text=Post"
                    className="me-3"
                    alt="Post"
                  />

                  <div>
                    <h4 className="h6">
                      <Link href="#" className="text-decoration-none">
                        Why SEO Is Important
                      </Link>
                    </h4>

                    <small className="text-muted">September 1, 2026</small>
                  </div>
                </div>

                <div className="d-flex mb-3">
                  <img
                    src="https://placehold.co/150x100?text=Post"
                    className="me-3"
                    alt="Post"
                  />

                  <div>
                    <h4 className="h6">
                      <Link href="#" className="text-decoration-none">
                        Digital Marketing Benefits
                      </Link>
                    </h4>

                    <small className="text-muted">August 28, 2026</small>
                  </div>
                </div>

                <div className="d-flex">
                  <img
                    src="https://placehold.co/150x100?text=Post"
                    className="me-3"
                    alt="Post"
                  />

                  <div>
                    <h4 className="h6">
                      <Link href="#" className="text-decoration-none">
                        How To Improve Your Website
                      </Link>
                    </h4>

                    <small className="text-muted">August 20, 2026</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnerBlogPage;
