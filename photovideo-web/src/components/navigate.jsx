import { Link } from 'react-router-dom';
import {useState} from 'react'
// import './Navigate.css'; // Optional: Add custom styles for your navigation
import HomePage from '../pages/HomePage';
import PhotosPage from '../pages/PhotosPage';
import VideosPage from '../pages/VideosPage';
import CommissionsPage from '../pages/CommissionsPage';
import ContactPage from '../pages/ContactPage';
import CvPage from '../pages/CvPage';

export default function NavigateSite() {

  const [currentPage, setCurrentPage] =useSate('HomePage');

  //depending on value of the currentPage we return the responding component to render

  const renderPage =()=>{
    if(currentPage === '/'){
      return<HomePage/>;
    } 
    if(currentPage === 'Photos'){
      return<PhotosPage/>;
    } 
    if(currentPage === 'Videos'){
      return<VideosPage/>;
    } 
    if(currentPage === 'Commissions'){
      return<CommissionsPage/>;
    } 
    if(currentPage === 'Contact'){
      return<ContactPage/>;
    } 
    if(currentPage === 'CV'){
      return<CvPage/>;
    } 
  }


  const handlePageChange = (page) => setCurrentPage(page);


}




