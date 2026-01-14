import React, { useState } from 'react';
import './BollywoodMovies.css';

const bollywoodMovies = [
  {
    id: 1,
    title: "Bade Miya chote Miya",
    genre: "Action",
    rating: 8.9,
    year: 2025,
    director: "David Dhawan",
    Image: "https://stat4.bollywoodhungama.in/wp-content/uploads/2022/02/Bade-Miyan-Chote-Miyan-1.jpg",
    cast: ["Akshay Kumar", "Tiger Shroff"],
  },
  {
    id: 2,
    title: "Fighter 2",
    genre: "Action",
    rating: 9.9,
    year: 2025,
    director: "Siddharth Anand",
    Image: "https://images.indianexpress.com/2024/01/fighter-28012024.jpg",
    cast: ["Hrithik Roshan", "Deepika Padukone"],
  },
  {
    id: 3,
    title: "Dhurander",
    genre: "Action",
    rating: 9.9,
    year: 2025,
    director: "Rajkumar Santoshi",
    Image: "https://mxp-media.ilnmedia.com/media/content/2025/Jul/image-1_6878a8415b761.jpeg?w=780&h=1064&cc=1",
    cast: ["Ranvir Singh", "Sara Arjun"],
  },
  {
    id: 4,
    title: "Pushpa 2",
    genre: "Drama",
    rating: 8.3,
    year: 2024,
    director: "Sukumar",
    Image: "https://m.media-amazon.com/images/M/MV5BZjllNTdiM2QtYjQ0Ni00ZGM1LWFlYmUtNWY0YjMzYWIxOTYxXkEyXkFqcGc@._V1_.jpg",
    cast: ["Allu Arjun", "Rashmika Mandanna"],
  },
  {
    id: 5,
    title: "Tere Ishq Mein",
    genre: "Romance",
    rating: 8.9,
    year: 2025,
    director: "Aanand L. Rai",
    Image: "https://stat4.bollywoodhungama.in/wp-content/uploads/2023/06/Tere-Ishk-Mein27.jpg",
    cast: ["Dhanush", "Kriti Sanon"],
  },
];

function BollywoodMovies() {
  const [loading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [movies] = useState(bollywoodMovies);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [sortBy, setSortBy] = useState('title');

  const getRatingCategory = (rating) => {
    if (rating >= 9.5) return 'blockbuster';
    if (rating >= 8.5) return 'superhit';
    if (rating >= 7.5) return 'hit';
    return 'average';
  };

  const filteredMovies = movies.filter(movie => {
    const searchLower = searchTerm.toLowerCase();

    const matchesSearch =
      movie.title.toLowerCase().includes(searchLower) ||
      movie.genre.toLowerCase().includes(searchLower) ||
      movie.director.toLowerCase().includes(searchLower) ||
      movie.cast.some(actor => actor.toLowerCase().includes(searchLower)) ||
      movie.year.toString().includes(searchTerm);

      const matchesGenre = selectedGenre ==='All' || movie.genre === selectedGenre;
      return matchesSearch && matchesGenre;
     
    
  });

  const sortedAndFilteredMovies =[ ...filteredMovies].sort((a,b)=>{
    switch(sortBy){
      case 'rating':
        return b.rating - a.rating;
      case 'year':
        return b.year - a.year;
      case 'genre':
        return a.genre.localeCompare(b.genre);
      case 'title':
        default:
          return a.title.localeCompare(b.title);
    }
  })

  const genres = ['All', ...new Set(movies.map(movie => movie.genre))];

  return (
    <div className="bollywood-movies">
      <h2>Bollywood Hits</h2>

      {loading ? (
        <div className="loading-spinner">
          <p>Loading Bollywood Movies...</p>
        </div>
      ) : (
        <div className="main-content">
          <div className="search-section">
            <input
              type="text"
              placeholder="Search Bollywood movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />

            {searchTerm && (
              <p className="search-results">
                Found {filteredMovies.length} movie
                {filteredMovies.length !== 1 ? 's' : ''} for "{searchTerm}"
              </p>
            )}
          </div>

          <div className="filter-section">
            <h4>Filter by Genre:</h4>
            <div className="genre-buttons">
              {genres.map(genre => (
                <button
                  key={genre}
                  className={`genre-button ${selectedGenre === genre ? 'active' : ''}`}
                  onClick={() => setSelectedGenre(genre)}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
              <div className='sort-section'>
                <label htmlFor='sort-select'>Sort By:</label>
                <select
                id='sort-select'
                value={sortBy}
                onChange={(e)=>setSortBy(e.target.value)}>
                  <option value="title">Title(A-Z)</option>
                  <option value="rating">Rating(High - Low)</option>
                  <option value="year">Year(Newest First)</option>
                  <option value="genre">Genre(A-Z)</option>
                  </select>


              </div>

          {
            (searchTerm || selectedGenre !== 'All') && (
              <button
              className='clear-filters'
              onClick={()=> {
                setSearchTerm('');
                setSelectedGenre('All');
              }}>Clear All Filters</button>
            )
          }

          <div className="movies-grid">

            {sortedAndFilteredMovies.length > 0 ?
            (sortedAndFilteredMovies.map(movie => (
              <div className="movie-card" key={movie.id}>
                <img
                  src={movie.Image}
                  alt={movie.title}
                  className="movie-image"
                />
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-year">{movie.year}</p>
                <p className="movie-genre">{movie.genre}</p>
                <p className="movie-director">Dir: {movie.director}</p>
                <p className="movie-cast">Cast: {movie.cast.join(', ')}</p>
                <p className={`movie-rating rating-${getRatingCategory(movie.rating)}`}>
                  {movie.rating}/10
                </p>
              </div>
            ))):(
                 <div className='empty-state'>

                  <h3>No Bollywood movies found!</h3>
                  <p>
                    {searchTerm || selectedGenre !== 'All' ? 
                  "Try adjusting your search or filter criteria":
                  "Start searching to find amazing Bollywood movies!"  
                  }
                  </p>
                 </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default BollywoodMovies;

//34 min