import React,{useEffect, useState} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import API from './API';
import Button from './Components/Button';
import { toast } from "react-toastify";
import Loader from './Components/Loader';
import Modal from './Components/Modal'

function App(){
  const [galleryName,setGalleryName]=useState('');
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  const [dataSet,setDataSet]=useState(null);
  const [page,setPage]=useState(1);
  const [visibleButton,setVisibleButton]=useState(false);
  const [visibleModal, setVisibleModal]=useState(false);
  const [largeImageURL,setLargeImageURL]=useState(null);
  useEffect(() => {
    setPage(1);
    setDataSet([])
  }, [galleryName]);

  useEffect(() => {
    if(galleryName===''&&page===1){
      return
     
    }
    getFetch();    
   // eslint-disable-next-line 
  }, [galleryName,page]);

  const getFetch=()=>{
    setLoading(true);
    setVisibleButton(false);
      
    API.fetchAPI(page,galleryName)
     .then(data=>{
          if(data.hits.length===0){ 
          toast.error('Ничего не найденно по вашему запросу.Введите коректный запрос')
       }
       if(data.hits.length!==12){
          toast('Это последние картинки');
          
       }
       setDataSet(prev=>([...prev,...data.hits]));
       setVisibleButton(true);
    })      
    .catch(error=>setError(error))    
    .finally(()=>{
      setLoading(false);
      scroll(); 
      })
  }

  const scroll=()=>{
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }
  const handelSearchbarSubmit=name=>{
    setGalleryName(name)
    } 
  
  const handelButton=()=>{
    setPage(prev=>(prev+1))
           
    }
  
  const  toggleModal = () =>
       setVisibleModal(prev=>(!prev))
      
  
  const  modalCard = (largeImageURL) => {
      setLargeImageURL(largeImageURL);
      toggleModal();
    }
  return (
      <>
        <Searchbar onSubmit={handelSearchbarSubmit}/>
        {error&&<div>Произошла ошибка при запросе</div>}
        {loading&&<Loader/>}
        {dataSet &&<ImageGallery data={dataSet} modalCard={modalCard}/>} 
        {visibleButton&&<div><Button onClick={handelButton}/></div>}           
        <ToastContainer autoClose={3000} />
        {visibleModal && (<Modal onClick={toggleModal}><img src={largeImageURL} alt="" /></Modal>)}
      </>
      
 )

}
export default App;
