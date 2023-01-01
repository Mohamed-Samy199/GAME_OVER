import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

const Drama = () => {
    let [drama, setDrama] = useState([])
    let getTrending = async () => {
        let { data } = await axios.get("https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=b44e5bbfa6921b60c1a1e3941df29c03")
        setDrama(data.results)
    }
    useEffect(() => {
        getTrending()
    })
    return (
        <div className='row gy-4 my-3'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>DRAMA</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            {
                drama.map((e, i) => (
                    <div className='col-md-3' key={i}>
                        <div className='position-relative'>
                            {e.poster_path ? <img className='w-100' src={"https://image.tmdb.org/t/p/w500" + e.poster_path} alt="img" /> :
                                <img className='w-100' src="https://images.pexels.com/photos/6899924/pexels-photo-6899924.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />}
                            <h2 className='h6 mt-1'>{e.title}</h2>
                            <span className='position-absolute text-light p-2 bg-info top-0 end-0'>{e.vote_average}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Drama