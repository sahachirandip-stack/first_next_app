import Pagination from "@/component/Pagination";
import getPosts from "@/lib/wordpress";
import Image from "next/image";
import Link from "next/link";

const API_URL = process.env.WORDPRESS_API_URL;
const PATH_URL = process.env.API_PATH;
const POST_PER_PAGE = process.env.POST_PER_PAGE;

const BlogPage = async ({ searchParams }) => {
  const params = await searchParams;

  const currentPage = Number(params?.page) || 1;

   const response = await fetch(
    `${API_URL}${PATH_URL}posts?acf_format=standard&page=${currentPage}&per_page=${POST_PER_PAGE}&_embed=&_fields=_embedded,id,date,title,excerpt,slug,_links` 
  ,{
    next: {
      revalidate: 60,
    },
  });

  const posts = await response.json();
  const totalPages = Number(response.headers.get("X-WP-TotalPages"));
  console.log(totalPages);

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h1>Our Blog</h1>
          <span className="text-primary fw-bold">Latest News</span>

          <h2 className="display-6 fw-bold mt-2">From Our Blog</h2>
        </div>

        <div className="row g-4">
          {posts.map((post,index) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <article className="card blog-card border-0 shadow-sm">
                {post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url &&
                <Image
                  width={300}
                  height={250}
                  src={post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                  className="card-img-top"
                  alt={
                    post?._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
                    post.title.rendered
                  }
          priority={index === 0}
                />}

                <div className="card-body p-4">
                  <small className="text-muted">{formatDate(post.date)}</small>

                  <h3 className="h4 mt-2">{post.title.rendered}</h3>

                  <div
                    className="text-muted"
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.rendered,
                    }}
                  />

                  <Link
                    href={`blog/${post.slug}`}
                    className="btn btn-outline-primary"
                  >
                    Read Article
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} basePath='/blog'/>
      </div>
    </section>
  );
};
export default BlogPage;
