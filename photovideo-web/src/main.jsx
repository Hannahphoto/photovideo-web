import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css';

//Import Pages

import ErrorPage from '../src/pages/ErrorPage.jsx';
import HomePage from '../src/pages/HomePage.jsx';
import PhotosPage from '../src/pages/PhotosPage.jsx';
import VideosPage from '../src/pages/VideosPage.jsx';
import CommissionsPage from '../src//pages/CommissionsPage.jsx';
import ContactPage from '../src/pages/ContactPage.jsx';
import CvPage from '../src/pages/CvPage.jsx';


// import ErrorPage from './pages/ErrorPage.jsx';
// import HomePage from './pages/HomePage.jsx';
// import PhotosPage from './pages/PhotosPage.jsx';
// import VideosPage from './pages/VideosPage.jsx';
// // import CommissionsPage from './pages/CommissionsPage.jsx';
// import ContactPage from './pages/ContactPage.jsx';
// import CvPage from './pages/CvPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/photos',
    element: <PhotosPage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/videos',
    element: <VideosPage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/commissions',
    element: <CommissionsPage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/contact',
    element: <ContactPage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/cv',
    element: <CvPage/>,
    errorElement: <ErrorPage/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
 
 <React.StrictMode>
  <RouterProvider router={router}/>
 </React.StrictMode>

)
