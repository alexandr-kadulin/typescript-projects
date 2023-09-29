import { Navbar, Hero, Sidebar, Submenu } from '.';
import { AppProvider } from '../context/appContext';

export const App = () => {
  return (
    <AppProvider>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </AppProvider>
  );
};
