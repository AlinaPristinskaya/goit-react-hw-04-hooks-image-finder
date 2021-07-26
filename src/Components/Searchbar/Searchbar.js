import React,{Component} from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css'


class Searchbar extends Component {
    
    state = {
      galleryName:''
    }
    
    handelChange=event=>{
        this.setState({galleryName:event.currentTarget.value})
    }
    handelSubmit=event=>{
        event.preventDefault();
        if(this.state.galleryName.trim() === ''){
            toast('Введите что хотите найти');
            return
        }

        this.props.onSubmit(this.state.galleryName);
        this.setState({galleryName:''});
    }
   
  
    render() {
        
         return (
        <>
          <header className={s.Searchbar}>
           <form className={s.SearchForm} onSubmit={this.handelSubmit}>
           <button type="submit" className={s.SearchForm_button}>
           <span className={s.SearchForm_button_label}>Search</span>
           </button>

           <input
            onChange={this.handelChange}
            value={this.state.galleryName}
            className={s.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"/>
          </form>
        </header> 






        </>
      );
  
    }}
    export default Searchbar;