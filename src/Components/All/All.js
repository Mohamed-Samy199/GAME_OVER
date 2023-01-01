import React, { Fragment, useContext } from 'react'
import { Carousel } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { MediaContext } from '../../Context/MediaContext'
import Movies from '../Movies/Movies'
import People from '../People/People'
import Tvshows from '../Tvshows/Tvshows'

const All = () => {
    let { trendingMovies, trendingTvShows } = useContext(MediaContext)
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ALL</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Fragment>
                <Carousel>
                    <Carousel.Item>
                        <div className='row'>
                            {
                                trendingMovies.slice(3, 7).map((e, i) => (
                                    <div className='col-md-3 ' key={i}>
                                        <div className='item position-relative'>
                                            <img className='w-100' src={"https://image.tmdb.org/t/p/w500" + e.poster_path} alt='movie' />
                                            <h2 className='h6 mt-1'>{e.title}</h2>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='row'>
                            {
                                trendingTvShows.slice(3, 7).map((e, i) => (
                                    <div className='col-md-3 ' key={i}>
                                        <div className='item position-relative'>
                                            <img className='w-100' src={"https://image.tmdb.org/t/p/w500" + e.poster_path} alt='movie' />
                                            <h2 className='h6 mt-1'>{e.title}</h2>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Fragment>
            <Movies />
            <Tvshows />
            <People />
        </div>
    )
}
export default All