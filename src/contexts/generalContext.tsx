import React, { createContext, useContext } from 'react';
import { mapBoxApi } from '../services/mapBoxApi';

import { CityProps } from "../@types/location.interface"
import { WeatherProps } from "../@types/weather.interface"
import { openWeatherApi } from '../services/openWeatherApi';

type GeneralContextData = {
  city: CityProps,
  currentWeather: WeatherProps,
  loadingSearch: boolean,
  searchLilst: any,
  searchAddress: (text: string) => void,
  getCurrentCity: () => void
}

type GeneralProviderProps = {
  children: React.ReactNode;
}

export const GeneralContext = createContext({} as GeneralContextData);

export function GeneralProvider({ children, ...rest }: GeneralProviderProps) {

  const [city, setCity] = React.useState<CityProps | any>(null);
  const [currentWeather, setcurrentWeather] = React.useState<WeatherProps | any>(null);
  const [loadingSearch, setLoadingSearch] = React.useState<boolean>(false);
  const [searchLilst, setSearchLilst] = React.useState<any>(null);


  const getCurrentCity = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const { data: { features } } = await mapBoxApi.get(`geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}`);

      const values = {
        name: features[0]?.text,
        place_name: features[0]?.place_name,
        latitude: latitude,
        longitude: longitude,
      }

      setCity(values)
      getWeatherData(values);

    });

  }


  async function getWeatherData(city: any) {
    const { data: { daily } } = await openWeatherApi.get(`/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude=current,minutely,hourly,alerts&lang=pt_br&units=${"metric"}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`)

    const values = {
      temperature: daily[0]?.temp?.day,
      temp_max: daily[0]?.temp?.max,
      temp_min: daily[0]?.temp?.min,
      description: daily[0]?.weather[0]?.description,
    };

    setcurrentWeather(values)


  }




  async function getWeatherOfCity(lat: any, lon: any) {
    const { data: { daily } } = await openWeatherApi.get(`/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&lang=pt_br&units=${"metric"}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`)

    const values = {
      temperature: daily[0]?.temp?.day,
      temp_max: daily[0]?.temp?.max,
      temp_min: daily[0]?.temp?.min,
      description: daily[0]?.weather[0]?.description,
    };

    return values;


  }




  async function searchAddress(text: string) {


    try {
      setLoadingSearch(true);
      const { data } = await mapBoxApi.get(`/geocoding/v5/mapbox.places/${text}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}`)

      const { features } = data;

      const newArray: any = [];

      for (let index = 0; index < features.length; index++) {
        const element = features[index];

        const weather = await getWeatherOfCity(element?.geometry?.coordinates[1], element?.geometry?.coordinates[0])


        newArray.push({
          place_name: element?.place_name,
          longitute: element?.geometry?.coordinates[0],
          latitude: element?.geometry?.coordinates[1],
          temperature: weather.temperature,
          temp_max: weather.temp_max,
          temp_min: weather.temp_min,
          description: weather.description,
        });


      }


      setSearchLilst(newArray);

      setLoadingSearch(false);

    } catch (error) {

    }


  }




  return (
    <GeneralContext.Provider value={{
      city,
      currentWeather,
      loadingSearch,
      searchLilst,
      getCurrentCity,
      searchAddress
    }}>
      {children}
    </GeneralContext.Provider>
  )
}