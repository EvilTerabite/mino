import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './shared/pages/homepage/HomePage'

function App() {
  return (
    <React.Fragment>
      <main>
        <Router>
          <Routes index={<HomePage />}>
            <Route path="/" element={<HomePage />}/>
          </Routes>
        </Router>
      </main>
    </React.Fragment>
  );
}

export default App;
