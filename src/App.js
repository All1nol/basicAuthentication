import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard'
import Login from './Login/login';
import useToken from './components/useToken';

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
          <React.Fragment path="/dashboard">
            <Dashboard />
          </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;