import { Component } from "react";
import { toast } from "react-toastify";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import API from '../API'
import s from './ImageGallery.module.css';
import Loader from '../Loader'
import Button from "../Button";





export default class ImageGallery extends Component {
    state={
        loading:false,
        error:false,
        dataSet:null,
        page:1,
        visibleButton:false,
        

    }
    
    componentDidUpdate(prexProps,prevState){
        
        const prevQuery=prexProps.galleryName;
        const nextQuery=this.props.galleryName;
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
        const{page}=this.state;
        const query=this.props.galleryName
        
        this.setState({loading:true,visibleButton:false});
        


        API.fetchAPI(query,page)
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
        
    handelButton=()=>{
        this.setState(prevState=>({page:prevState.page+1}));
        
    }
    

    scroll=()=>{
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
    }
     
   
      
    render(){
        return(
        <div>
            
            {this.state.error&&<div>Произошла ошибка при запросе</div>}
            {this.state.loading&&<Loader/>}
            {!this.props.galleryName &&<div>Стейт пустой, введите что хотите найти</div>}
            {this.state.dataSet&&
            
             <ul className={s.ImageGallery}>{this.state.dataSet.map(card=>
                 <ImageGalleryItem id={card.id}
                 webformatURL={card.webformatURL} 
                 largeImageURL={card.largeImageURL}
                  />)}</ul>}
             {this.state.visibleButton&&<div><Button onClick={this.handelButton}/></div>}
             
           
        </div>

    )
        
    }
}
    
            
            

        
    
        
        
    
        
      
