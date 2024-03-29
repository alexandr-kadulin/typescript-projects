import React, { useState, useEffect } from "react";
import { useFetch } from "../utils";
import { Follower } from ".";

export interface IFollower {
  id: number;
  avatar_url: string;
  html_url: string;
  login: string;
}

export const App = () => {
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState<IFollower[]>([]);

  const { loading, data } = useFetch();

  useEffect(() => {
    if (loading) {
      return;
    }

    setFollowers(data[page]);
    // eslint-disable-next-line
  }, [loading, page]);

  const handlePage = (index: number) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;

      if (nextPage > data.length - 1) {
        nextPage = 0;
      }

      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;

      if (prevPage < 0) {
        prevPage = data.length - 1;
      }

      return prevPage;
    });
  };

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              prev
            </button>
            {data.map((_, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? "active-btn" : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
};
