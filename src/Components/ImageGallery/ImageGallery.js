import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from './ImageGallery.module.css';


export default class ImageGallery extends Component {
    
  
    render(){
        return(
            <div>
                <ul className={s.ImageGallery}>{this.props.data.map(({id,webformatURL,largeImageURL})=>
                 {const openModalCard = () => this.props.modalCard(largeImageURL);
                 return (
                    <ImageGalleryItem
                      key={id}
                      imageSrc={webformatURL}
                      openModalCard={openModalCard}/>)})}
                 </ul> 
            </div>)
        
    }
}
    
            
            

        
    
        
        
    
        
      
