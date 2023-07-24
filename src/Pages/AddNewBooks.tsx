import { useState } from "react";
import { useBookPostMutation } from "../Redux/api/apiSlice";
import logo from "../assets/logo/logoBlack.webp";
const AddNewBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [review, setReview] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");

  const [updatePost] = useBookPostMutation();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updatePost({
      title: title,
      author: author,
      coverPhoto: coverPhoto,
      review: review,
      description: description,
      genre: genre,
      date: date,
    });
  };

  return (
    <>
      <div className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <div className="flex justify-around">
            <img src={logo} className="w-32" alt="...." />
            <h1 className="text-3xl font-semibold">Add a New Book</h1>
          </div>
          <form className="mt-6" onSubmit={handleSubmit}>
            <label
              htmlFor="title"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Title
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
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
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
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
              onChange={(e) => setCoverPhoto(e.target.value)}
              value={coverPhoto}
              id="coverPhoto"
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
              onChange={(e) => setDescription(e.target.value)}
              value={description}
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
              onChange={(e) => setReview(e.target.value)}
              value={review}
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
                  onChange={(e) => setGenre(e.target.value)}
                  value={genre}
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
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
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

        <div className="">
          <p className="underline font-bold text-xl">
            picture url for Testing purpose
          </p>
          <br />
          <ol>
            <li>https://i.ibb.co/5B9Yhg4/pic1.jpg</li>
            <li>https://ibb.co/album/fVp7Qq</li>
            <li>https://i.ibb.co/tcSCPfC/logo3.png</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default AddNewBooks;
