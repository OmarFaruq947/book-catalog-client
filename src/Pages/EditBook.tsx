import logo from "../assets/logo/logoBlack.webp";

const EditBook = () => {
  return (
    <>
      <div className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <div className="flex justify-around">
            <img src={logo} className="w-32" alt="...." />
            <h1 className="text-3xl font-semibold">Edit Book Information</h1>
          </div>
          <form className="mt-6">
            <label
              htmlFor="title"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Title
            </label>
            <input
              id="title"
              type="title"
              name="title"
              placeholder="title"
              autoComplete="title"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />

            <label
              htmlFor="author"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Author
            </label>
            <input
              id="author"
              type="author"
              name="author"
              placeholder="author"
              autoComplete="new-author"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />

            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Cover Photo
            </label>
            <input
              id="url"
              type="url"
              name="coverPhoto"
              placeholder="Cover photo URL"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />

            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Description
            </label>
            <input
              id="description"
              type="text"
              name="description"
              placeholder="description"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />

            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Review
            </label>
            <input
              id="review"
              type="text"
              name="review"
              placeholder="Review"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />

            <div className="flex justify-between gap-3">
              <span className="w-1/2">
                <label className="block text-xs font-semibold text-gray-600 uppercase">
                  Genre
                </label>
                <input
                  id="genre"
                  type="text"
                  name="genre"
                  placeholder="genre"
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </span>
              <span className="w-1/2">
                <label className="block text-xs font-semibold text-gray-600 uppercase">
                  Publication Date
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditBook;
