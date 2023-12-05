import React from "react";

export const Follower = ({
  avatar_url,
  html_url,
  login,
}: {
  avatar_url: string;
  html_url: string;
  login: string;
}) => {
  return (
    <article className="card">
      <img src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <a href={html_url} className="btn">
        view profile
      </a>
    </article>
  );
};
