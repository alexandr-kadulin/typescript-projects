import { AppProvider, useGlobalContext } from '../context/appContext';
import { Navbar, CartContainer } from '.';

export const App = () => {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <AppProvider>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </AppProvider>
  );
};
