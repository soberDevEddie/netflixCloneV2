import { useEffect, type FC } from 'react';

// My files
import { tmdbAPI } from '../tmdbApi';

const Home: FC = () => {
  useEffect(() => {
    const getMovie = async () => {
      const res = await tmdbAPI.fetchPopularMovies();
      console.log(res.data);
    };
    getMovie();
  }, []);
  return <div>Home</div>;
};

export default Home;
