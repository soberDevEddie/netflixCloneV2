import { useEffect, type FC } from 'react';

// My files
import { tmdbAPI } from '../tmdbApi';

const Home: FC = () => {
  useEffect(() => {
    const getMovie = async () => {
      const response = await tmdbAPI.fetchPopularMovies();
      console.log(response);
    };
    getMovie();
  }, []);
  return <div>Home</div>;
};

export default Home;
