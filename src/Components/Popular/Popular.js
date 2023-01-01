import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

const Popular = () => {
    let [popular, setPopuler] = useState([])
    let getTrending = async () => {
        let { data } = await axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b44e5bbfa6921b60c1a1e3941df29c03")
        setPopuler(data.results)
    }
    useEffect(() => {
        getTrending()
    }, [])
    return (
        <div className='row gy-4 my-3'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>POPULAR</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            {
                popular.map((e, i) => (
                    <div className='col-md-3' key={i}>
                        <div className='position-relative'>
                            <img className='w-100' src={"https://image.tmdb.org/t/p/w500" + e.poster_path} alt="img" />
                            <h2 className='h6 mt-1'>{e.title}</h2>
                            <span className='position-absolute text-light p-2 bg-info top-0 end-0'>{e.vote_average}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Popular