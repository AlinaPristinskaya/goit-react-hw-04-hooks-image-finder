import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from './ImageGallery.module.css';


export default function ImageGallery({data,modalCard}){
  return(
          <div>
             <ul className={s.ImageGallery}>{data.map(({id,webformatURL,largeImageURL})=>
                 {const openModalCard = () => modalCard(largeImageURL);
                 return (
                    <ImageGalleryItem
                      key={id}
                      imageSrc={webformatURL}
                      openModalCard={openModalCard}/>)})}
              </ul> 
         </div>)
        
    
}
    
            
            

        
    
        
        
    
        
      
