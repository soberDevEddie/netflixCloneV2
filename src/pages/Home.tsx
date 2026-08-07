import { useEffect, type FC } from 'react';

// My files
import { tmdbAPI } from '../tmdbApi';

const Home: FC = () => {
  useEffect(() => {
    const loadMovies = async () => {
      const [
        popularMoviesResult,
        topRatedMoviesResult,
        trendingMoviesResult,
        allGenres,
      ] = await Promise.all([
        tmdbAPI.fetchPopularMovies(),
        tmdbAPI.fetchTopRatedMovies(1),
        tmdbAPI.fetchTrendingMovies('week'),
        tmdbAPI.getGenres(),
      ]);
      console.log(popularMoviesResult, 'Popular Movies');
      console.log(allGenres, 'All Genres');
    };

    loadMovies();
  }, []);

  return <div>Home</div>;
};

export default Home;
