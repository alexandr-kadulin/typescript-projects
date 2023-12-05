import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../utils';
import { IMovie } from '../context/appContext';

export const SingleMovie = () => {
  const { id } = useParams<{ id: string }>();
  const {
    isLoading,
    error,
    data: movie,
  } = useFetch(`&i=${id}`) as {
    isLoading: boolean;
    error: { show: boolean; msg: string };
    data: IMovie | null;
  };

  if (isLoading) {
    return <div className="loading"></div>;
  }

  if (error.show || !movie) {
    return (
      <div className="page-error">
        <h1>{error.msg || 'Movie not found'}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }

  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;

  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    </section>
  );
};
