import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from 'react-router-dom';

import { Page } from './pages/page';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/profile" replace />} />
          <Route path="/:tabValue" element={<Page />} />
        </Routes>
      </Router>
    </>
  );
};

export { App };
