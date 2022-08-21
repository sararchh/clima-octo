import React from 'react';
import CardWeather from '../../components/atoms/cardWeather';
import MainTemplate from '../../components/templates/mainTemplate';
import { GeneralContext } from '../../contexts/generalContext';


function HomeScreen() {

    const { city, currentWeather } = React.useContext(GeneralContext);


    return (
        <MainTemplate content={
            <div className="grid-cols-1 w-full">
                <div className="container w-full p-10">


                   <CardWeather city={city} data={currentWeather} />


                </div>
            </div>
        } />
    );


}

export default HomeScreen;