import React from 'react';

import Header from '../../components/header/header';


import { Container } from "./homeStyle.js";
import { Banner } from '../../components/banner/banner';

const Home = () => {


  return (

    <div>
   
      <Header/>
      <Container>
        <Banner/>
      </Container>

    </div>

  );

};

export default Home;
