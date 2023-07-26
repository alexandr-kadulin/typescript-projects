import { useEffect } from 'react';
import { IList } from '.';

interface IAlert {
  type: string;
  msg: string;
  removeAlert: (show?: boolean, type?: string, msg?: string) => void;
  list: IList[];
}

export const Alert = ({ type, msg, removeAlert, list }: IAlert) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [list]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};
