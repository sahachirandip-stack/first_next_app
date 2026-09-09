
const API_URL = process.env.WORDPRESS_API_URL;
const PATH_URL = process.env.API_PATH;
const POST_PER_PAGE = process.env.POST_PER_PAGE;

export  async function getPosts() {
  const response = await fetch(
    `${API_URL}${PATH_URL}posts?acf_format=standard&per_page=${POST_PER_PAGE}&_embed=&_fields=id,date,title,excerpt,slug,author,featured_media,categories,_links,_embedded,content`
  );

  const posts = await response.json();
  return posts;
};
