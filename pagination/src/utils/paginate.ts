import { IFollower } from "../components";

export const paginate = (followers: IFollower[]) => {
  const itemsPerPage = 10;
  const pages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;

    return followers.slice(start, start + itemsPerPage);
  });

  return newFollowers;
};
