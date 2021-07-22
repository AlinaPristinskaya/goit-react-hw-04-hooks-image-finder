import React,{Component} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery'



class App extends Component {
  state={
    galleryName:''
  }
  handelSearchbarSubmit=galleryName=>{
    this.setState({galleryName})
  }
  
   
  render() {
     
           return (
          <>
            <Searchbar onSubmit={this.handelSearchbarSubmit}/>
            <ImageGallery galleryName={this.state.galleryName}/>
            <ToastContainer autoClose={3000} />
          </>
          
     )
   

  }
  }

export default App;
