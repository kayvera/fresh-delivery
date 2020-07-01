import React from "react";

import Directory from "../../components/directory/directory.component";
import Banner from "../../components/banner/banner.component";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => (
  <HomePageContainer>
    <Banner />
    <Directory />
  </HomePageContainer>
);

export default HomePage;
