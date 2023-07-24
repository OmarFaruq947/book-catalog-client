import { Link, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetBookByIdQuery,
} from "../Redux/api/apiSlice";

const BooksDetails = () => {
  const [passData] = useDeleteBookMutation();
  const { id } = useParams();
  const { data } = useGetBookByIdQuery(id);

  const handleDelete = (data: { id: any }) => {
    passData(data.id);
  };
  const admin = false;
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={data?.image}
              className="max-w-[200px] rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{data?.title}</h1>
              <p className="py-6">
                {data?.description.length <= 250
                  ? data?.description
                  : data?.description.slice(0, 150) + "..."}
              </p>
              <h1 className="text-[12px] text-gray-500 ">
                শিরোনাম: {data?.title}
              </h1>
              <h1 className="text-[12px] text-gray-500 ">
                লেখক : {data?.author}
              </h1>
              <h1 className="text-[12px] text-brand ">
                ক্যাটাগরি: {data?.genre}
              </h1>
              <h1 className="text-[12px] text-gray-500 ">
                প্রকাশনী তারিখ: {data?.publicationDate}
              </h1>

              <div className="flex gap-x-8 mt-5">
                {admin ? (
                  <>
                    <button className="bg-white hover:bg-green-200 px-8 text-green-500  border border-green-500 font-bold duration-300 py-1">
                      Add to Cart
                    </button>
                    <button className="bg-white hover:bg-red-200 px-8 text-red-500 border border-red-500 font-bold duration-300">
                      Customer Feedback
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/edit-book"
                      className="bg-white hover:bg-green-200 px-8 text-green-500  border border-green-500 font-bold duration-300 py-1"
                    >
                      Edit Book
                    </Link>
                    <button
                      onClick={() => handleDelete(data)}
                      className="bg-white hover:bg-red-200 px-8 text-red-500 border border-red-500 font-bold duration-300"
                    >
                      Delete Book
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div>
              <h1 className="text-gray-900 font-bold text-3xl mb-2">
                {data?.title}
              </h1>
              <p className="text-gray-700 text-xs mt-2">
                লেখক :
                <a
                  href="#"
                  className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  {data?.author}
                </a>
              </p>
              {/* <p className="text-base leading-8 my-5">{description}</p> */}
              <h3 className="text-2xl font-bold my-5">#1. {data?.title}</h3>
              <p className="text-base leading-8 my-5">{data?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BooksDetails;
