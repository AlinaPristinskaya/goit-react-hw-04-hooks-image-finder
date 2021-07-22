import React from 'react';
import s from './ImageGalleryItem.module.css'



const ImageGalleryItem= ({id,webformatURL,largeImageURL})=>(
    <li className={s.ImageGalleryItem} key={id}>
<img src={webformatURL} alt={largeImageURL} className={s.ImageGalleryItem} />
  </li>

)

export default ImageGalleryItem;