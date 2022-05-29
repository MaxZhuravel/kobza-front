import { useState } from 'react';
import ErrorBoundary from './ErrorBoundary';
import AppRouter from './AppRouter';
import { AuthContext } from './context';

function App() {
  const [isAuth,setIsAuth]=useState(false);
  return (
    <ErrorBoundary>
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth,
      }}>
        <AppRouter />
      </AuthContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
