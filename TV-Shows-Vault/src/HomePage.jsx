import { useState, useEffect } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import './App.css'

function HomePage () {
    const { search } = useOutletContext()
    const [tvShows, setTVShows] = useState([])

    const url = 'https://api.tvmaze.com'
    const shows = `${url}/shows`

    const navigate = useNavigate()

    useEffect(() => {
        fetch(shows)
            .then(res => res.json())
            .then(json => setTVShows(json))
    }, [])

    const filterShows = tvShows.filter(t =>
        t.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <div className ='tvShows'>
            <h3>TV Shows</h3>
              <p>Dive into your next obsession with a website built for nonstop binge-watching. From gripping dramas and laugh-out-loud comedies to edge-of-your-seat thrillers, every series is just a click away. Discover new favorites, revisit classics, and let entire seasons unfold back-to-back without interruption. Whether you've got a free evening or a full weekend to disappear into, this is your all-access pass to stories you won't want to pause.</p>
            <ul>
                {filterShows.map((t) => (
                    <li key={t.id}>
                    < img src = {t.image?.medium} alt={t.name}
                        onClick={() => {navigate(`/tvShows/${t.id}`)}}
                    />
                    </li>
                ))}
            </ul>
            </div>
        </>
    )
}

export default HomePage