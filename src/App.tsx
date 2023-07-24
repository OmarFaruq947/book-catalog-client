import { RouterProvider } from "react-router-dom";
import { router } from "./Route/router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
