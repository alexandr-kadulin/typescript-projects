import { useState, useEffect } from 'react';
import { ITour, Loading, Tours } from '.';

const url = 'https://course-api.com/react-tours-project';

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState<ITour[]>([]);

  const removeTour = (id: string) => {
    const newTours = tours.filter((tour: ITour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = (await response.json()) as ITour[];

      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    void fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => void fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
