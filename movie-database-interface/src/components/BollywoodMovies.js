import React ,{useState} from 'react';
import './BollywoodMovies.css';

const bollywoodMovies =[
    
    {

    id:1,
    title:"Bade Miya chote Miya",
    genre:"Action",
    rating:8.9,
    year:2025,
    director:"David Dhawan",
    Image:"https://stat4.bollywoodhungama.in/wp-content/uploads/2022/02/Bade-Miyan-Chote-Miyan-1.jpg",
    cast:["Akshay Kumar","Salman Khan"],

    },

    {

    id:2,
    title:"Fighter 2",
    genre:"Action",
    rating:9.9,
    year:2025,
    director:"Siddharth Anand",
    Image:"https://images.indianexpress.com/2024/01/fighter-28012024.jpg",
    cast:["Hrithik Roshan","Deepika Padukone"],

    },
    {

    id:3,
    title:"dhurander",
    genre:"Action",
    rating:9.9,
    year:2025,
    director:"Rajkumar Santoshi",
        Image:"https://mxp-media.ilnmedia.com/media/content/2025/Jul/image-1_6878a8415b761.jpeg?w=780&h=1064&cc=1",
    cast:["ranvir Singh","Alia Bhatt"],

    },

    

    {

    id:4,
    title:"hunter",
    rating:8.3,
    genre:"Action",
    year:2023,
    director:"vishal Furia",
    Image:"https://c8.alamy.com/comp/2RXMA5E/kraven-the-hunter-poster-aaron-taylor-johnson-2RXMA5E.jpg",
    cast:["Vijay Sethupathi","Ananya Panday"],

    },
    {

    id:5,
    title:"Tere Ishq Mein",
    rating:8.9,
    year:2025,
    director:"Abbas-Mustan",
    Image:"https://stat4.bollywoodhungama.in/wp-content/uploads/2023/06/Tere-Ishk-Mein27.jpg",
    cast:["Dhanush","kriti Sanon"],

    },

];

function BollywoodMovies() {
    //state for loading indicator
    const[loading, setLoading]= useState (false);
    //state for genre filtering
    const[selectedGenre, setSelectedGenre]= useState ('All');

    //state for movies
    const [movies, setMovies]= useState (bollywoodMovies);
    const[searchTerm , setSearchTerm]= useState ('');
    const[sortBy, setSortBy]= useState ('title');

    //{condation && <Component>}
    //condation ? valueIfTrue : valueIfFalse
    return(
        <div className="bollywood-movies">
            <h2>Bollywood Hits</h2>
            {loading ?(
                <div className="loading-spinner">
                    <p>Loading BollywoodMovies....</p>
                </div>
            ):(<div className='main-contant'>
                <div className='movies-grid'>
                    {movies.map((movie) =>(
                        <div className='movie-card' key={movie.id}>
                            <img 
                            src={movie.Image}
                            alt={movie.title}
                            className='movie-image'/>
                            <h3 className='movie-title'>{movie.title}</h3>
                            <p className='movie-year'>{movie.year}</p>
                            <p className='movie-genre'>{movie.genre}</p>
                            <p className='movie-director'>Dir: {movie.director}</p>
                            <p className='movie-cast'>Cast: {movie.cast.join (', ')}</p>
                            <p className='movie-rating'>{movie.rating}/10</p>
                            
                            
                            </div>
                    ))}

                    </div>
                
                </div>)}

            



            </div >
    )
}
export default BollywoodMovies;