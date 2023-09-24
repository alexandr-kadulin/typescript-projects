import { Modal, Sidebar, Home } from '.';
import { AppProvider } from '../context/appContext';

export const App = () => {
  return (
    <AppProvider>
      <Home />
      <Modal />
      <Sidebar />
    </AppProvider>
  );
};
