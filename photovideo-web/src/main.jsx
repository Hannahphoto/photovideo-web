import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css';

//bring pages so router views correct page

// import ErrorPage from './pages/ErrorPage.jsx';
// import HomePage from './pages/HomePage.jsx';
// import PhotosPage from './pages/PhotosPage.jsx';
// import VideosPage from './pages/VideosPage.jsx';
// import CommissionsPage from './pages/CommissionsPage.jsx';
// import ContactPage from './pages/ContactPage.jsx';
// import CvPage from './pages/CvPage.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomePage/>,
//     errorElement: <ErrorPage/>,
//   },
//   {
//     path: '/photos',
//     element: <PhotosPage/>,
//     errorElement: <ErrorPage/>,
//   },
//   {
//     path: '/videos',
//     element: <VideosPage/>,
//     errorElement: <ErrorPage/>,
//   },
//   {
//     path: '/commissions',
//     element: <CommissionsPage/>,
//     errorElement: <ErrorPage/>,
//   },
//   {
//     path: '/contact',
//     element: <ContactPage/>,
//     errorElement: <ErrorPage/>,
//   },
//   {
//     path: '/cv',
//     element: <CvPage/>,
//     errorElement: <ErrorPage/>,
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <App />

)
