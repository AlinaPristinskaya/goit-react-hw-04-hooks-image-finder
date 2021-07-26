import React,{Component} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import API from './API';
import Button from './Components/Button';
import { toast } from "react-toastify";
import Loader from './Components/Loader';
import Modal from './Components/Modal'

class App extends Component {
  state={
    galleryName:'',
    loading:false,
    error:false,
    dataSet:null,
    page:1,
    visibleButton:false,
    visibleModal:false,
    largeImageURL:null
  }
  componentDidUpdate(prevProps,prevState){
        
    const prevQuery=prevState.galleryName;
    const nextQuery=this.state.galleryName;
    const prevPage=prevState.page;
    const nextPage=this.state.page;
           
    if(prevQuery!==nextQuery){
        this.setState({page:1,dataSet:[]});
     
    }
    if((prevQuery!==nextQuery)||(prevPage!==nextPage)){
        this.getFetch()
    }

      
  }
  getFetch=()=>{
    const{page, galleryName}=this.state;
    this.setState({loading:true,visibleButton:false});
  
    API.fetchAPI(page,galleryName)
     .then(data=>{
          if(data.hits.length===0){ 
          toast.error('Ничего не найденно по вашему запросу.Введите коректный запрос')
       }
       if(data.hits.length!==12){
          toast('Это последние картинки');
          
       }
      this.setState(prevState=>({dataSet:[...prevState.dataSet,...data.hits],visibleButton:true}));
     })      
    .catch(error=>this.setState({error}))    
    .finally(()=>{
      this.setState({loading:false});
      this.scroll(); 
      })
  }

  scroll=()=>{
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  handelSearchbarSubmit=name=>{
  this.setState({galleryName:name})
  } 

  handelButton=()=>{
    this.setState(prevState=>({page:prevState.page+1}));
   
  }

  toggleModal = () =>
    this.setState(({ visibleModal }) => ({ visibleModal: !visibleModal }));

  modalCard = (largeImageURL) => {
   this.setState({ largeImageURL});
   this.toggleModal();
  }
   
  render() {
     
           return (
          <>
            <Searchbar onSubmit={this.handelSearchbarSubmit}/>
            {this.state.error&&<div>Произошла ошибка при запросе</div>}
            {this.state.loading&&<Loader/>}
            {this.state.dataSet &&<ImageGallery data={this.state.dataSet} modalCard={this.modalCard}/>} 
            {this.state.visibleButton&&<div><Button onClick={this.handelButton}/></div>}           
            <ToastContainer autoClose={3000} />
            {this.state.visibleModal && (<Modal onClick={this.toggleModal}><img src={this.state.largeImageURL} alt="" /></Modal>)}
          </>
          
     )
   
  }
}

export default App;
