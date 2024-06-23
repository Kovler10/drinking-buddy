import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Page } from './pages/page';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<>home</>} />
          <Route
            path="/:tabValue"
            element={
              <Page/>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export { App };
