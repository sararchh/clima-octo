import React from 'react';
import MainTemplate from '../../components/templates/mainTemplate';
import { GeneralContext } from '../../contexts/generalContext';



function SearchScreen() {

    const timeref = React.useRef() as any;



    const { searchAddress, loadingSearch, searchLilst } = React.useContext(GeneralContext);

    const handleSearch = (e: any) => {
        e.preventDefault();
        // console.log("Event", e.target.search.value);
        const text = e.target.search.value;
        searchAddress(text);

    }


    const handleChange = (e: any) => {

        clearTimeout(timeref.current);

        timeref.current = setTimeout(() => {
            const text = e.target.value;
            searchAddress(text);

        }, 1200);

    }


    return (
        <MainTemplate content={
            <div className="grid-cols-1 w-full">
                <div className="flex flex-col w-full p-10 items-center">

                    <form
                        onSubmit={handleSearch}
                    >
                        <input
                            className="sm:w-[80vw] md:w-[600px] w-[100%] h-[50px] text-slate-400 placeholder:italic placeholder:text-md placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder="Busque um endereço"
                            type="text"
                            name="search"
                            onChange={handleChange}
                        />

                    </form>

                    {loadingSearch && (
                        <p className="mt-[2rem] text-sm">Realizando pesquisa...</p>
                    )}

                    {!loadingSearch && searchLilst && (
                        <div className='flex flex-col mt-[2rem]'>

                            {searchLilst.map((item: any, index: number) => (
                                <div key={index} className='flex w-[80vw] min-h-[80px] py-2 px-2 sm:px-4 md:px-20 my-2 rounded-md drop-shadow-md bg-gradient-to-b from-blue-400 to-blue-500'>
                                    <div className="flex flex-1 flex-col justify-center items-start">
                                        <p className="text-md  text-slate-200"> {item?.place_name}</p>
                                    </div>
                                    <div className="flex flex-1 flex-col justify-center items-end">
                                        <p className="text-lg text-slate-200 font-semibold"> {item?.temperature.toFixed(0)}ºC</p>
                                        <p className="text-sm text-slate-200 capitalize">{item?.description}</p>
                                        <p className="text-sm text-slate-200">{item?.temp_min && item?.temp_min.toFixed(0)}ºC - {item?.temp_max && item?.temp_max.toFixed(0)}ºC</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}


                </div>
            </div>
        } />
    );


}

export default SearchScreen;