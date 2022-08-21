import React from 'react';

import { CityProps } from "../../../@types/location.interface"
import { WeatherProps  } from "../../../@types/weather.interface"

type Props = {
    city: CityProps,
    data: WeatherProps,
}


const CardWeather: React.FC<Props> = ({city, data}) => {


    return (
        <div className="flex container w-full justify-center items-center">

        <div className="w-[450px] h-[450px] my-10 p-5 rounded-md drop-shadow-md bg-gradient-to-b from-blue-400 to-blue-500">

            <div className="grid-rows-2">
                <div className="flex h-[200px] justify-end p-3">
                    <div className="container flex-col w-100">
                        <p className="text-7xl text-slate-200 text-end"> {data?.temperature.toFixed(0)}ºC</p>
                        <p className="text-xl mt-2 text-slate-200 text-end"> {city?.name}</p>
                    </div>
                </div>

                <div className="flex h-[200px] justify-start p-3">
                    <div className="mt-10">
                        <p className="text-xl text-slate-200 mb-1 capitalize">{data?.description}</p>
                        <p className="text-4xl text-slate-200">{data?.temp_min && data?.temp_min.toFixed(0)}ºC - {data?.temp_max && data?.temp_max.toFixed(0)}ºC</p>
                    </div>

                </div>


            </div>




        </div>

    </div>
    );


}

export default CardWeather;