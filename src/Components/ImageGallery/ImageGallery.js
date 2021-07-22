import { Component } from "react";
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';
import { toast } from 'react-toastify';
import Button from '../Button'




export default class ImageGallery extends Component {
    
    state={
        gallery:null, 
        error:null,
        status:'idle',
        page:1       
        
    }
        componentDidUpdate(prevProps,prevState){
        const prevName=prevProps.galleryName;
        const nextName=this.props.galleryName;
        
        
        if(prevName!==nextName){
            this.setState({status:'pending',gallery:null,error:null});            
            const MY_KEY=`21851027-176a1d26dd1c513dea811d525`;
            const url =`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${nextName}&page=${this.state.page}&per_page=12&key=${MY_KEY}`;
            fetch(url)
            .then(res=>res.json())
            .then(galleryObj=>{
                if(galleryObj.total!==0){
                    this.setState({gallery:galleryObj,status:'resolved'})

                } else {this.setState({gallery:null, 
                    loading:false,error:true,status:'rejected'
                    });
                    toast.error('vvtdite corectnii zapros')} 
                    
                })  
        }
    }
    incrementPage=()=>{
        console.log(18);
        this.setState({page:2})
        
        
    }
    
    resetPage(){
        this.setState({page:2})
    }
    render(){
        
            if (this.state.status==='idle'){
                return <div>vvedite zapros</div>
            }

            if (this.state.status==='pending'){
                return <div>loading...</div>
            }
            
            if (this.state.status==='rejected'){
                return <p>{this.state.error}</p>

            }

            if (this.state.status==='resolved'){
                return <> <ul key={1111} className={s.ImageGallery}>{this.state.gallery.hits.map((card)=>
                    <ImageGalleryItem              
                    id={card.id}
                    webformatURL={card.webformatURL}
                    largeImageURL={card.largeImageURL}/>)}</ul>
                    <div><Button 
                    incrementPage={this.incrementPage} 
                    resetpage={this.resetPage} 
                    fetch={this.componentDidUpdate}
                    length={this.state.gallery.hits}/></div>
                    </>
            }
            
            
}
            
            

        
    
        
        
    
        
      
}