import React, { useContext } from 'react'
import vid from "../Assets/vid.mp4"
import "../../index.scss"
import { NavLink, useNavigate } from 'react-router-dom'
import { MediaContext } from '../../Context/MediaContext'

export default function Home() {
  let { trendingMovies } = useContext(MediaContext)
  let navigate = useNavigate()
  let goToAll = () => {
    navigate('/all')
  }
  return (
    <div>
      <div className='height position-relative text-center'>
        <div className='position-absolute w-100 pt-5 watch d-flex justify-content-center align-items-center flex-column my-4'>
          <h3 className='text-light mb-2'>book a ticket for the best cinematic works!</h3>
          <p className='text-muted mb-2'>Movies what you've watched and search for what to new next! Plus get free premium loot!</p>
          <button className='btn btn-outline-primary mt-3' onClick={goToAll}>watch now</button>
        </div>
        <video src={vid} autoPlay loop muted></video>
      </div>
      <div className='row my-5'>
        {
          trendingMovies.slice(0, 4).map((e, i) => (
            <div className='col-md-3 ' key={i}>
              <NavLink className="nav-link" to={`/details/${e.id}/${e.media_type}`}>
                <div className='item'>
                  <img className='w-100' src={"https://image.tmdb.org/t/p/w500" + e.poster_path} alt='movie' />
                  <h2 className='h6 mt-1'>{e.title}</h2>
                </div>
              </NavLink>
            </div>
          ))
        }
      </div>
    </div>
  )
}