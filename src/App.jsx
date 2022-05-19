import ErrorBoundary from './ErrorBoundary';
import AppRouter from './AppRouter';

function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
}

export default App;
