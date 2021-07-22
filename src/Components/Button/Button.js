import { Component } from "react";
import s from './Button.module.css'
  
class Button extends Component{
    state={
        length:this.props.length,
        
    }
  handelSubmit=e=>{
    e.preventDefault();
    if (this.state.length.length===12){
        console.log(this.state.length.length);
        this.props.incrementPage()
        this.props.fetch();

    }
    
   
  }


render(){
    console.log(this.state.length.length)
    return  <form onSubmit={this.handelSubmit}>
          <button 
          type="submit"  
           
          className={s.Button}>Load More
          </button>
          </form>

}
  
}
    
   
  
  
  
  export default Button;