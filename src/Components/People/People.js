import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'
import { MediaContext } from '../../Context/MediaContext'

const People = () => {
    let { trendingPeople } = useContext(MediaContext)
    return (
        <div className='row gy-3 mt-3 py-2'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>PEOPLE</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='col-md-4'>
                <div className='box'>
                    <div className='brder w-25 mb-5'></div>
                    <div>
                        <h3>Trending <br />People <br />To watch now</h3>
                    </div>
                    <p className='text-muted'>most watched movies by days</p>
                    <div className='brder mt-5'></div>
                </div>
            </div>
            {
                trendingPeople.slice(0, 10).map((e, i) => (
                    <div className='col-md-2 ' key={i}>
                        <NavLink className="nav-link" to={`/details/${e.id}/${e.media_type}`}>
                            <div className='item position-relative'>
                                {e.profile_path ?
                                    <img className='w-100' src={"https://image.tmdb.org/t/p/w500" + e.profile_path} alt='movie' /> :
                                    <img className='w-100 h-100' src="https://images.pexels.com/photos/848117/pexels-photo-848117.jpeg?auto=compress&cs=tinysrgb&w=600" alt='movie' />}
                                <h2 className='h6 mt-1'>{e.name}</h2>
                            </div>
                        </NavLink>
                    </div>
                ))
            }
        </div>
    )
}
export default People