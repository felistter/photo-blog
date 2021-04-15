import Link from "next/link";
import GalleryItem from "./GalleryItem";
import MoreButton from "./MoreButton";

const GalleryList = ({ articles }) => {
  return (
    <section className="blog">
      {articles.map((article) => (
        <GalleryItem
          key={article.sys.id}
          fields={article.fields}
          sys={article.sys}
        />
      ))}
      <MoreButton />
    </section>
  );
};

export default GalleryList;
