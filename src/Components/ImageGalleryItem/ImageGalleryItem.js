import s from './ImageGalleryItem.module.css'


 const ImageGalleryItem = ({ imageSrc, openModalCard }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={imageSrc}
        alt=""
        className={s["ImageGalleryItem-image"]}
        onClick={openModalCard}
      />
    </li>
  );
};

export default ImageGalleryItem;
