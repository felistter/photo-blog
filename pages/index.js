import About from "../app/components/About";
import Hero from "../app/components/Hero";
import GalleryList from "../app/components/GalleryList";
import Head from 'next/head';

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
      <Head>
        <meta name="description" content="Personal blog for public sharing travel experience and memories" />
        <meta name="title" property="og:title" content="Travel Blog" />
        <meta property="og:type" content="Website" />
        <meta name="image" property="og:image" content="https://github.com/felistter/portfolio/blob/main/public/work-example-1.png?raw=true" />
        <meta name="description" property="og:description" content="Personal blog for public sharing travel experience and memories" />
        <meta name="author" content="Svetlana Shkarina" />
      </Head>
      <Hero />
      <About />
      {articles && <GalleryList articles={articles} />}
    </div>
  );
}
