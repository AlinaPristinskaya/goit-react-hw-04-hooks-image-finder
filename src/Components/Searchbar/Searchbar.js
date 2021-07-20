import React,{Component} from 'react';
import { toast } from 'react-toastify';


class Searchbar extends Component {
    
    state = {
      galleryName:''
    }
    
    handelChange=event=>{
        console.log(event.currentTarget.value)
        this.setState({galleryName:event.currentTarget.value})
    }
    handelSubmit=event=>{
        event.preventDefault();
        if(this.state.galleryName.trim() === ''){
            toast.error('Введите что хотите найти');
            return
        }

        this.props.onSubmit(this.state.galleryName);
        this.setState({galleryName:''});
    }
   
  
    render() {
        
         return (
        <><form onSubmit={this.handelSubmit}>
            <button type="submit">иконка лупы</button>      
            <input             
            onChange={this.handelChange}
            value={this.state.name}
            type="text"
            name="name"            
            required/>
          </form> 
        </>
      );
  
    }}
    export default Searchbar;