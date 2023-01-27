import React, { useCallback, useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './shared/pages/homepage/HomePage'
import AuthContext from './shared/context/auth-context'
import NewAircraft from './shared/pages/aircraft/NewAircraft'
import NotFound from './shared/pages/NotFound'
import FindAircraft from './shared/pages/aircraft/FindAircraft'
// import { ThemeProvider } from '@emotion/react';
// import themeContext from './context/theme-context'

import './App.css'
function App() {
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');

  const login = useCallback((userId, token) => {
    setToken(token);
    setUserId(userId);
  })

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
  })


  let routes;

  if(!!token) {
    routes = (
      <React.Fragment>
        <Route path="/find" element={<FindAircraft/>}/>
        <Route path="/new" element={<NewAircraft />}/>
      </React.Fragment>
    )
  } else {
    routes = (
        <Route path="/" element={<HomePage />}/>
    )
  }
  return (
          <AuthContext.Provider value={{
      loggedIn: !!token,
      userId: userId,
      token: token,
      login: login,
      logout: logout
    }}
      >
      <main>
        <Router>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<NewAircraft />}/>
            <Route path="/find" element={<FindAircraft />}/>
            {/*routes*/}
          </Routes>
        </Router>
      </main>
    </AuthContext.Provider>
  );
  }

export default App;
