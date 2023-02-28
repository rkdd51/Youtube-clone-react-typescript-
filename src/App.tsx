import React from "react";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;

// Head
// Body
//   - SideBar
//   - MenuItmes
// MenuContainers
//   - ButtonList
//   - VideoContainer
//   -VideoList
