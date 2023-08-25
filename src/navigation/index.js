import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Users from '../pages/Users';
import User from '../pages/User';

// List Approach
const routerList = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/users',
    element: <Home />
  },
  {
    path: '/users/:id',
    element: <Home />
  }
])

// Nested Approach
const routerNested = createBrowserRouter(createRoutesFromElements(
  <Route path="/">
    <Route path="" element={<Home />} />

    <Route path="users">
      <Route path="" element={<Users />} />
      <Route path=":userId" element={<User />} />
    </Route>

    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
  </Route>
))

export const ListProvider = <RouterProvider router={routerList} />
export const NestedProvider = <RouterProvider router={routerNested} />