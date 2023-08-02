import {
  Outlet,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/home/Home";
import Footer from "./components/Footer/Footer";
import Orders from "./Pages/orders/Orders";
import Message from "./Pages/message/Message";
import Messages from "./Pages/messages/Messages";
import MyGigs from "./Pages/myGigs/MyGigs";
import Add from "./Pages/add/Add";
import Gig from "./Pages/gig/Gig";
import Gigs from "./Pages/gigs/Gigs";
import "./app.scss";
function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/mygigs",
          element: <MyGigs />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
