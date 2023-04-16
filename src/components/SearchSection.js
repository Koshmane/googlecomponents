
import Logo from './Logo';
import SearchBar from './SearchBar';
import Button from './Button';
// import LanguageLink from './LanguageLink'


const SearchSection = () => {
    return (
        
     <div>
      
      <div>
      <Logo/>
      <SearchBar/> 
      <div style = {{width: "250px", margin: "auto", display: "block"}}>
        <div style = {{float: "left"}} ><Button title = {"Google Search"} /></div>
      <div style = {{float: "right"}}><Button title = {"I'm Feeling Lucky"} /></div>
      </div>


      
      
      </div>
     
     </div>
     

       
    )

}


export default SearchSection;