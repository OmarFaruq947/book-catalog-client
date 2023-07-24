import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Page is Note Found</h1>
      <Link to="/home">Back to the home</Link>
    </div>
  );
};

export default NotFound;
