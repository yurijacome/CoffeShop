import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { GlobalStyle } from "./styles/GlobalStyle";


const App = () => {

  return (

    <div className="App">
      <GlobalStyle />
      <AppRoutes />
    </div>

  );

};

export default App;