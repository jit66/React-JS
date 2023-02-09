import React, { lazy,Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
// import Instamart from "./components/Instamart";



const Instamart = lazy(() =>import("./components/Instamart"))

const About = lazy(() => import("./components/About"))

const AppLayout = () => {
  const [user,setUser] = useState({
    name: "Jeet Thakur",
    email: "jt123@mail.com",
  })

  return (
    <>
    <UserContext.Provider
      value={{
        user:user,
        setUser:setUser,
      }}
      >
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
        </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: 
        <Suspense fallback={<h1>See you in a sec!!!</h1>}>
          <About />
        </Suspense>
        ,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element:
        <Suspense fallback={<Shimmer/>}>
          <Instamart />
        </Suspense>
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
