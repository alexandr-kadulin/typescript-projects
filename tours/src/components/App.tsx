import { useState, useEffect } from "react";
import { ITour, Loading, Tours } from ".";

const url = "https://course-api.com/react-tours-project";

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState<ITour[]>([]);

  const removeTour = (id: string) => {
    const newTours = tours.filter((tour: ITour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = () => {
    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTours();
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
          <button className="btn" onClick={fetchTours}>
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
