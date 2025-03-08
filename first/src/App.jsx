import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './PAGES/Layout';
import Home from './PAGES/Home';
import About from './PAGES/About';
import Shop from './PAGES/Shop';
import ProductDetails from './COMPONENTES/ProductDetails';
import Card from './PAGES/Card';
import Maincontext from "./COMPONENTES/Context/Maincontext";
import Contact from './PAGES/Contact';
import Login from './PAGES/Login';
import Register from './PAGES/Register';
import Thanks from './PAGES/Thanks';

export default function App() {
         const route = createBrowserRouter([
             {
              path: '/',
              element: <Layout />,
              children: [
              {
                   path: '',
                   element: <Home />
              },
              {
                   path: 'about',
                   element: <About />
              },
              {
                   path: 'contact',
                   element: <Contact/>
              },
              {
                   path: 'shop/:slug?',
                   element: <Shop />
              },
              {
                   path: '/productDetails/:productId',
                   element: <ProductDetails />
              },
              {
                   path: '/card',
                   element: <Card />
              },
              {
                   path: '/login',
                   element: <Login/>
              },
              {
                   path: '/register',
                   element: <Register/>
              },
              {
               path:'/thanks',
               element:<Thanks/>
              }
              
              ]
         }
     ]);

     return (
         <Maincontext >
              <RouterProvider router={route} />
         </Maincontext>
     );
}
