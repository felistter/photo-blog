import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";

let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

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
export default function Article({ article }) {
  const Bold = ({ children }) => <span className="bold">{children}</span>;

  const Text = ({ children }) => <p className="align-center">{children}</p>;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  };
  console.log(article);
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
