import React,{Component} from 'react';
import Modal from '../Modal/Modal';
import s from './ImageGalleryItem.module.css'



class ImageGalleryItem extends Component {
  state = {
    visibleModal:false ,
  };
  
  toggleModal = () =>{
    
    this.setState(prevState => ({ visibleModal: !prevState.visibleModal }));
  }
  
  

  render() {
    return (<>
      <li className={s.ImageGalleryItem} key={this.props.id} onClick={this.toggleModal}>
       <img src={this.props.webformatURL} alt="" className={s.ImageGalleryItem} />
      </li>
      {this.state.visibleModal&&(<Modal onClick={this.toggleModal}><img src={this.props.largeImageURL} alt=''/></Modal>)}
      </>
    );
  }
}


export default ImageGalleryItem;