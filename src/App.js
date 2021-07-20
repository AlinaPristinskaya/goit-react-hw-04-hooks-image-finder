import React,{Component} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Components/Searchbar';



class App extends Component {
  state={
    galleryName:''
  }
  handelSearchbarSubmit=galleryName=>{
    this.setState({galleryName})
  }
  
  /* componentDidMount(){
    this.setState({loading:true})
    fetch('https://pixabay.com/api/?q=cat&page=1&key=21851027-176a1d26dd1c513dea811d525&image_type=photo&orientation=horizontal&per_page=12')
    .then(res=>res.json())
    .then(gallery=>this.setState({gallery})).finally(()=>this.setState({loading:false}))
  } */
 
 
   
    

   
  render() {
     
           return (
          <>
            <Searchbar onSubmit={this.handelSearchbarSubmit}/>
            <ToastContainer autoClose={3000} />
          </>
          
     )
   

  }
  }

export default App;
