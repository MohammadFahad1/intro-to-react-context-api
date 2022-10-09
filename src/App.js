import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Main from './layouts/Main';

const router = createBrowserRouter([
  {
    path: '/', element: <Main></Main>, children: [
      { path: '/', element: <Home></Home> },
      { path: '/products', loader: () => axios('tshirts.json'), element: <Products></Products> }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
