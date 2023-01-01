import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let MediaContext = createContext(null);
export default function MediaContextProvider(props) {

    let [trendingMovies, setTrendingMovies] = useState([])
    let [trendingTvShows, setTrendingTvShows] = useState([])
    let [trendingPeople, setTrendingPeople] = useState([])
    let getTrending = async (medaiType, callback) => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${medaiType}/day?&api_key=b44e5bbfa6921b60c1a1e3941df29c03`)
        callback(data.results)
    }
    useEffect(() => {
        getTrending('movie', setTrendingMovies)
        getTrending('tv', setTrendingTvShows)
        getTrending('person', setTrendingPeople)
    }, [])
    return <MediaContext.Provider value={{ trendingMovies, trendingTvShows, trendingPeople }}>
        {props.children}
    </MediaContext.Provider>
}