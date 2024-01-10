import { useEffect, useState } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

const API_URL= 'http://www.omdbapi.com?apikey=ddb88c0b'


const App= () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const SearchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
   setMovies(data.Search);
  }

  useEffect(()=>{
    SearchMovies('')
  },[]);


  return (
    
    <div className="app">
     <h1>MovieSearch</h1>
     
     <div className="search">
      <input
      placeholder="Search for movies"
      value= {searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img 
      src={SearchIcon}
      alt="Search"
      onClick={()=> SearchMovies(searchTerm)}
      />    
     </div>

    {
      movies?.length > 0
      ?(
        <div className="container">
      {movies.map((movie)=>(
        <MovieCard movie={movie}/>
      ))}
     </div>
      ):(
        <div className="empty">
         <h2>No movies found</h2>  
        </div>
      )
    }
     

    </div>
  );
}

export default App;
