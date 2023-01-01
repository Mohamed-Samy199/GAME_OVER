import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'
import { MediaContext } from '../../Context/MediaContext'

const Movies = () => {
    let { trendingMovies } = useContext(MediaContext)
    return (
        <div className='row gy-3 mt-3 py-2'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MOVIES</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='col-md-4'>
                <div className='box'>
                    <div className='brder w-25 mb-5'></div>
                    <div>
                        <h3>Trending <br />Movies <br />To watch now</h3>
                    </div>
                    <p className='text-muted'>most watched movies by days</p>
                    <div className='brder mt-5'></div>
                </div>
            </div>
            {
                trendingMovies.slice(0, 10).map((e, i) => (
                    <div className='col-md-2 ' key={i}>
                        <NavLink className="nav-link" to={`/details/${e.id}/${e.media_type}`}>
                            <div className='item position-relative'>
                                <img className='w-100' src={"https://image.tmdb.org/t/p/w500" + e.poster_path} alt='movie' />
                                <h2 className='h6 mt-1'>{e.title}</h2>
                                <span className='position-absolute text-light p-2 bg-info top-0 end-0'>{e.vote_average.toFixed(1)}</span>
                            </div>
                        </NavLink>
                    </div>
                ))
            }
        </div>
    )
}
export default Movies