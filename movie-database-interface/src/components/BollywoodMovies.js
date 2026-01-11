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
    Image:"https://m.media-amazon.com/images/M/MV5BMTYzZGI3ZTItY2E3Ny00ZjQyLWI3YjItY2E3Y2EwZTI2ZWRhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
    cast:["Akshay Kumar","Salman Khan"],

    },

    {

    id:2,
    title:"Fighter 2",
    genre:"Action",
    rating:9.9,
    year:2025,
    director:"Siddharth Anand",
    Image:"https://m.media-amazon.com/images/M/MV5BMTc5ZmYzMDAtZTIwZi00ZjYyLWI3YjItY2E3Y2EwZTI2ZWRhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
    cast:["Hrithik Roshan","Deepika Padukone"],

    },
    {

    id:3,
    title:"dhurander",
    genre:"Action",
    rating:9.9,
    year:2025,
    director:"Rajkumar Santoshi",
    Image:"https://m.media-amazon.com/images/M/MV5BMTc5ZmYzMDAtZTIwZi00ZjYyLWI3YjItY2E3Y2EwZTI2ZWRhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
    cast:["ranvir Singh","Alia Bhatt"],

    },

    

    {

    id:4,
    title:"hunter",
    rating:8.3,
    genre:"Action",
    year:2023,
    director:"vishal Furia",
    Image:"https://m.media-amazon.com/images/M/MV5BMTc5ZmYzMDAtZTIwZi00ZjYyLWI3YjItY2E3Y2EwZTI2ZWRhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
    cast:["Vijay Sethupathi","Ananya Panday"],

    },
    {

    id:5,
    title:"Tere Ishq Mein",
    rating:8.9,
    year:2025,
    director:"Abbas-Mustan",
    Image:"https://m.media-amazon.com/images/M/MV5BMTc5ZmYzMDAtZTIwZi00ZjYyLWI3YjItY2E3Y2EwZTI2ZWRhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
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

    return(
        <div className="bollywood-movies">
            <h2>Bollywood Hits</h2>
            {loading &&(
                <div className="loading-spinner">
                    Loading...
                </div>
            )}



            </div >
    )
}
export default BollywoodMovies;