import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

const Theater = () => {
    let [theater, setTheater] = useState([])
    let getTrending = async () => {
        let { data } = await axios.get("https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=b44e5bbfa6921b60c1a1e3941df29c03")
        setTheater(data.results)
    }
    useEffect(() => {
        getTrending()
    }, [])
    return (
        <Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>THEATER</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            {theater.length > 0 ?
                <div className='row gy-4 my-3'>
                    {
                        theater.map((e, i) => (
                            <div className='col-md-3' key={i}>
                                <div className='item position-relative'>
                                    <img className='w-100' src={"https://image.tmdb.org/t/p/w500" + e.poster_path} alt="img" />
                                    <h2 className='h6 mt-1'>{e.title}</h2>
                                    <span className='position-absolute text-light p-2 bg-info top-0 end-0'>{e.vote_average.toFixed(1)}</span>
                                </div>
                            </div>
                        ))
                    }
                </div> : <div>
                    <img src='https://media.tenor.com/YAs3DgW0dbMAAAAC/loading-loader.gif' className='w-100' style={{ objectFit: "cover", height: "90vh" }} alt='loading' />
                </div>
            }
        </Fragment>
    )
}
export default Theater