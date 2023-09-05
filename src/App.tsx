import {} from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/home";
import DetailPage from "@/pages/detail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/detail",
      element: <DetailPage />,
    },
  ]);

  return (
    <>
      <div className="bg-[url('./public/images/list_bg.jpg')] min-h-[100vh]">
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
        <div className="py-5">
          <a className="text-white m-10" href="/">
            Home
          </a>
          <a className="text-white" href="/detail">
            Detail
          </a>
        </div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
