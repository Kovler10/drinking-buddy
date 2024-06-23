import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BottomNavigation } from './components/bottom-navigation/bottom-navigation';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<>home</>} />
          <Route
            path="/:tabValue"
            element={
              <>
                <BottomNavigation />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export { App };
