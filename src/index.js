import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import ErrorPage from './error-page';
import E1 from './Exercises/Day01/E1';
import E2 from './Exercises/Day01/E2';
import ClothingCard from './components/ClothingCard';
import TVCard from './components/TVCard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "day-1/E1",
        element: <E1 />
      },
      {
        path: "day-1/E2",
        element: <E2 />
      },
      {
        path: "day-2/E1",
        element: <ClothingCard />
      },
      {
        path: "day-2/E2",
        element: <TVCard />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);