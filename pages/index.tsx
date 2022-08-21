import React from 'react';
import type { NextPage } from 'next';
import HomeScreen from '../src/screens/home';
import { GeneralContext } from '../src/contexts/generalContext';

const Home: NextPage = () => {

  const { getCurrentCity } = React.useContext(GeneralContext);

  React.useEffect(() => {
    getCurrentCity();
  }, [])

  return (
    <HomeScreen />
  )
}

export default Home
