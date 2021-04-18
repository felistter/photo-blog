import About from "../app/components/About";
import Hero from "../app/components/Hero";
import GalleryList from "../app/components/GalleryList";

let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "article",
  });

  return {
    props: {
      articles: data.items,
    },
  };
}

export default function Home({ articles }) {
  return (
    <div className="content-container">
      <Hero />
      <About />
      {articles && <GalleryList articles={articles} />}
    </div>
  );
}
