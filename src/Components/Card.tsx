import { Link } from "react-router-dom";

const Card = ({ bookData }: any) => {
  const { _id: id, title, author, image, publicationDate, genre } = bookData;
  return (
    <div>
      <div
        className="rounded-xl bg-gray-100 p-2 shadow-lg hover:shadow-xl"
        title={`${title} , ${author}`}
      >
        <Link to={`/book-details/${id}`}>
          <div className="relative flex items-end overflow-hidden rounded-xl">
            <img src={image} alt="..." className="max-h-94" />
          </div>
          <div className="mt-1 p-2">
            <h2 className="text-slate-700 text-sm" title={title}>
              {title.length <= 17 ? title : title.slice(0, 17)}
            </h2>
            <p className="mt-1 text-[12px] text-brand" title={author}>
              {author.length <= 20 ? author : author.slice(0, 20)}
            </p>
          </div>
          <div className="flex justify-around  text-[10px]">
            <p className="text-gray-400">{publicationDate}</p>
            <p className="bg-brand text-white px-2 py-1/2 rounded-lg ">
              {genre}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
