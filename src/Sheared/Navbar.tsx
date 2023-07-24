import { Link } from "react-router-dom";
import logo from "../assets/logo/books-catalogs-logo.webp";

const Navbar = () => {
  const loggedIn = true;
  return (
    <>
      <div className="navbar bg-brand text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              <li>
                <Link to="/all-books">All Books</Link>
              </li>

              <li className="flex gap-x-5 mr-5">
                {loggedIn ? (
                  <Link to="/sign-in" className="">
                    Sign In
                  </Link>
                ) : (
                  <Link to="/sign-up" className="">
                    Sign Up
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img className="w-40" src={logo} alt="" />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/all-books">All books</Link>
            </li>

            <li className="flex gap-x-5 mr-5">
              {loggedIn ? (
                <Link to="/sign-in" className="">
                  Sign In
                </Link>
              ) : (
                <Link to="/sign-up" className="">
                  Sign Up
                </Link>
              )}
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <Link to="/add-new-book" className="btn">
            Add New Book
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
