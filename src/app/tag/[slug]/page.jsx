import Pagination from "@/component/Pagination";
import Image from "next/image";
import Link from "next/link";

const API_URL = process.env.WORDPRESS_API_URL;
const PATH_URL = process.env.API_PATH;

async function getTagId(slug) {
  const response = await fetch(
    `${API_URL}${PATH_URL}tags?slug=${encodeURIComponent(slug)}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    return null;
  }

  const tags = await response.json();

  return tags?.[0]?.id || null;
}

async function getPostsByTag(slug) {
  const tagId = await getTagId(slug);

  if (!tagId) {
    return [];
  }

  const response = await fetch(
    `${API_URL}${PATH_URL}posts?tags=${tagId}&_fields=id,date,title,excerpt,slug,featured_image_url`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

export default async function TagPage({ params }) {
  const { slug } = await params;

  const posts = await getPostsByTag(slug);

//   const totalPages = Number(response.headers.get("X-WP-TotalPages"));
//   console.log(totalPages);

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

      <h1>Posts tagged: {slug}</h1>
          
        </div>
        <div className="row g-4">
          {posts.map((post,index) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <article className="card blog-card border-0 shadow-sm">
                {post?.featured_image_url &&
                <Image
                  width={300}
                  height={250}
                  src={post?.featured_image_url}
                  className="card-img-top"
                  alt={
                    post?._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
                    post.title.rendered
                  }
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
                    href={`/blog/${post.slug}`}
                    className="btn btn-outline-primary"
                  >
                    Read Article
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
         </div>
    </section>
  );
}