import Image from "next/image";
import Link from "next/link";

const API_URL = process.env.API_URL;
const PATH_URL = process.env.PATH_URL;

async function getAboutPage() {
  const response = await fetch(
    `${API_URL}${PATH_URL}pages?acf_format=standard&slug=about&_fields=acf,yoast_head_json`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch About page");
  }

  const pages = await response.json();

  return pages[0] || null;
}
// export async function generateMetadata() {
  

//   const pages = await getAboutPage();
//   const seo = pages?.yoast_head_json;

//   return {
//     title: seo?.title,
//     description: seo?.description,

//     alternates: {
//       canonical: seo?.canonical,
//     },

//     openGraph: {
//       title: seo?.og_title || seo?.title,
//       type:seo?.og_type, 
//       description: seo?.og_description || seo?.description,
//       url: seo?.og_url || seo?.canonical,
//       images: seo?.og_image?.map((image) => ({
//         url: image.url,
//         width: image.width,
//         height: image.height,
//         alt: image.alt,
//       })),
//     },
//   };
// }
const  AboutPage = async( )=>{
    
  const pages = await getAboutPage();
    const about = pages?.acf;
    console.log(about);
    
    return (        
<section className="section-padding">

    <div className="container">

        <div className="row align-items-center">
<h1>About</h1>
            <div className="col-lg-6">
                <Image 
                                  width={768}
                                  height={439}
                src={about?.['about_section'].image.sizes.medium_large}
                alt={about?.['about_section'].image.alt}
                priority
                />
                
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">

                <span className="text-primary fw-bold">
                   {about?.['about_section'].top_heading}
                </span>

                <h2 className="display-6 fw-bold mt-2">
                   {about?.['about_section'].heading}
                </h2>

                <div dangerouslySetInnerHTML={{
                    __html:about?.['about_section'].content,
                }}/>
                   

                <Link
                    href={about?.['about_section'].button_link}
                    className="btn btn-primary mt-3"
                >
                    {about?.['about_section'].button_text}
                </Link>

            </div>

        </div>

    </div>

</section>

    )
} 
export default AboutPage;