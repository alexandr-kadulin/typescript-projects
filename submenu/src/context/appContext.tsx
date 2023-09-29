import React, { useState, useContext } from 'react';
import { sublinksData } from '../data';

type TLink = {
  label: string;
  icon: JSX.Element;
  url: string;
};

type TPage = {
  page: string;
  links: TLink[];
};

type TCoordinates = {
  center: number;
  bottom: number;
};

interface IAppContext {
  isSidebarOpen: boolean;
  isSubmenuOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  openSubmenu: (text: string | null, coordinates: TCoordinates) => void;
  closeSubmenu: () => void;
  location: TCoordinates;
  page: TPage;
}

interface IAppContextChildren {
  children: React.ReactNode;
}

const AppContext = React.createContext({} as IAppContext);

export const AppProvider = ({ children }: IAppContextChildren) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({} as TCoordinates);
  const [page, setPage] = useState<{ page: string; links: TLink[] }>({
    page: '',
    links: [],
  });

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (text: string | null, coordinates: TCoordinates) => {
    const page = sublinksData.find((link) => link.page === text);

    setPage(page as TPage);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
