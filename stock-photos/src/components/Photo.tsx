interface IUser {
  name: string;
  portfolio_url: string;
  profile_image: { medium: string };
}

export interface IPhoto {
  urls: { regular: string };
  alt_description: string;
  likes: string;
  user: IUser;
}

export const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}: IPhoto) => {
  return (
    <article className="photo">
      <img src={regular} alt={alt_description} />
      <div className="photo-info">
        <div>
          <h4>{name}</h4>
          <p>{likes} likes</p>
        </div>
        <a href={portfolio_url}>
          <img src={medium} alt={name} className="user-img" />
        </a>
      </div>
    </article>
  );
};
