import moment from "moment";
import Link from "next/link";

const GalleryItem = ({ fields, sys }) => {
  return (
    <div className="post-container">
      <span className="title-post">
        <Link href={"/articles/" + fields.slug}>
          <a>{fields.title}</a>
        </Link>
      </span>

      <span className="subtitle-post">{moment(fields.date).format("LL")}</span>
      <span className="description-post">
        {fields.shortDescription.content[0].content[0].value}
      </span>
      <div className="image-container">
        <img src={fields.picture.fields.file.url} alt={fields.title} />
      </div>
    </div>
  );
};

export default GalleryItem;
