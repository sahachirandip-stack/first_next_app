
const API_URL = process.env.WORDPRESS_API_URL;
const PATH_URL = process.env.API_PATH;
const POST_PER_PAGE = process.env.POST_PER_PAGE;

// export  async function getPosts() {
//   const response = await fetch(
//     `${API_URL}${PATH_URL}posts?acf_format=standard&per_page=${POST_PER_PAGE}&_embed=&_fields=id,date,title,excerpt,slug,author,featured_media,categories,_links,_embedded,content`
//   );

//   const posts = await response.json();
//   return posts;
// };


async function fetchAPI(endpoint, options = {}) {
  const response = await fetch(
    `${API_URL}${API_PATH}${endpoint}`,
    {
      ...options,
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
}

// Posts
export async function getPosts(params = "") {
  return fetchAPI(`posts${params}`);
}

// Single post
export async function getPost(slug) {
  const posts = await fetchAPI(
    `posts?slug=${encodeURIComponent(slug)}&_embed`
  );

  return posts[0] || null;
}

// Categories
export async function getCategories() {
  return fetchAPI("categories");
}

// Tags
export async function getTags() {
  return fetchAPI("tags");
}

// Pages
export async function getPages() {
  return fetchAPI("pages?_embed");
}

// Single page
export async function getPage(slug) {
  const pages = await fetchAPI(
    `pages?slug=${encodeURIComponent(slug)}&_embed`
  );

  return pages[0] || null;
}

// Media
export async function getMedia(id) {
  return fetchAPI(`media/${id}`);
}