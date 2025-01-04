import { useState } from "react";
import HomePage from '../pages/HomePage'
import PhotosPage from '../pages/PhotosPage'
import VideosPage from '../pages/VideosPage'
import CommissionsPage from '../pages/CommissionsPage'
import CvPage from '../pages/CvPage'
import ContactPage from '../pages/ContactPage'

export default function NavigateSite(){
    const [currentPage, setCurrentPage] = useState('HomePage');

     // depending on the value of the currentPage we return the responding component to render
     const renderPage = () => {
        if(currentPage === 'Home'){
            return <HomePage/>;
        }
        if(currentPage === 'Photos'){
            return <PhotosPage/>;
        }
        if(currentPage === 'Videos'){
            return <VideosPage/>;
        }
        if(currentPage === 'Commissions'){
            return <CommissionsPage/>;
        }
        if(currentPage === 'Contact'){
            return <ContactPage/>;
        }
        if(currentPage === 'CV'){
            return <CvPage/>;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return(

    )
}



