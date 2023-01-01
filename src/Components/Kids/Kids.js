import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Kids = () => {
    let [kids, setKids] = useState([])
    let getTrending = async () => {
        let { data } = await axios.get("https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=b44e5bbfa6921b60c1a1e3941df29c03")
        setKids(data.results)
    }
    useEffect(() => {
        getTrending()
    })
    useEffect(() => {
        document.title = 'KIDS'
    }, [])
    return (
        <div className='row gy-4 my-3'>
            {
                kids.map((e, i) => (
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

export default Kids
