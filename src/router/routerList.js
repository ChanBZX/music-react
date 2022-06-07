import Discover from "../views/discover";
import Friend from "../views/friend";
import Mine from "../views/mine";

const pageRouter = [
  {
    path: '/',
    exact: true,
    element: <Discover />
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