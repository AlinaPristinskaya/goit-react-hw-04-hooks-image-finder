import React,{useState} from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css'

function Searchbar({onSubmit}){
  const [galleryName, setGalleryName]=useState('');

  const handelChange=event=>{
    setGalleryName(event.currentTarget.value)
  }

  const handelSubmit=event=>{
  event.preventDefault();
  if(galleryName.trim() === ''){
      toast('Введите что хотите найти');
      return
  }
  onSubmit(galleryName);
  setGalleryName('');
  }

  return (
    <>
      <header className={s.Searchbar}>
       <form className={s.SearchForm} onSubmit={handelSubmit}>
       <button type="submit" className={s.SearchForm_button}>
       <span className={s.SearchForm_button_label}>Search</span>
       </button>

       <input
        onChange={handelChange}
        value={galleryName}
        className={s.SearchForm_input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"/>
       </form>
      </header> 

    </>
  );

}
/* class Searchbar extends Component {
    
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
  
    }} */
    export default Searchbar;