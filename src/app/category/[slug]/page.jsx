import { getcategoryId } from "@/lib/wordpress";


const API_URL = process.env.WORDPRESS_API_URL;
const PATH_URL = process.env.API_PATH;

const Category = async ({params}) => {
    const {slug} = await params;
  const response = await getcategoryId({slug});

  if (!response.ok) {
    return null;
  }

  const categories = await response.json();

  const categoryId =  categories?.[0]?.id || null;
  return <h1>FGFGFG {categoryId}</h1>
};
export default Category;