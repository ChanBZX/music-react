import { Navigate } from "react-router-dom";

import Discover from "../views/discover";
import Recommend from "../views/discover/c-pages/recommend";
import Ranking from "../views/discover/c-pages/ranking";
import Songs from "../views/discover/c-pages/songs";
import Album from "../views/discover/c-pages/album";
import Artist from "../views/discover/c-pages/artist";
import Djradio from "../views/discover/c-pages/djradio";

import Friend from "../views/friend";
import Mine from "../views/mine";



const pageRouter = [
  {
    path: "/",
    exact: true,
    element: <Navigate to='/discover' />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        exact: true,
        element: <Navigate to='/discover/recommend' />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/album',
        element: <Album />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      }
    ]
  },
  {
    path: '/friend',
    element: <Friend />
  },
  {
    path: '/mine',
    element: <Mine />
  }
]

export { pageRouter };