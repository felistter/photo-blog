import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";

// Create a client to communicate with Contentful API
let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

// Get paths to all articles from Contentful API
export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: "article",
  });
  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: false,
  };
}

// Get each of the articles for corresponding path
export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: "article",
    "fields.slug": params.slug,
  });

  return {
    props: {
      article: data.items[0],
    },
  };
}

// Article component gets article data
// - transform article text to react components
// - replace images (embedded_assets) with image components
export default function Article({ article }) {
  return (
    <div className="article-container">
      <h1>{article.fields.title}</h1>
      <div className="article-description">
        {documentToReactComponents(article.fields.description, {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => (
              <div className="image-article">
                <Image
                  layout="intrinsic"
                  width={node.data.target.fields.file.details.image.width}
                  height={node.data.target.fields.file.details.image.height}
                  src={"https:" + node.data.target.fields.file.url}
                />
              </div>
            ),
          },
        })}
      </div>
    </div>
  );
}
