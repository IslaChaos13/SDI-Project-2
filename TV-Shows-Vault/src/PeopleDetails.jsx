import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import './App.css'

function PeopleDetails() {
    const [people, setPeople] = useState([])
    const { search } = useOutletContext()

    useEffect(() => {
        if (!search) return
        fetch(`https://api.tvmaze.com/search/people?q=${search}`)
        .then(res => res.json())
        .then(json => setPeople(json))
    }, [search])

    if (!people.length) return <h4>Search for an actor or actress above...</h4>

    return (
        <>
            <div className='cast'>
                <h3>People</h3>
                <ul>
                    {people.filter(p => p.person.image?.medium).map((p) => (
                        <li key={p.person.id}>
                            <img src={p.person.image.medium} alt={p.person.name} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default PeopleDetails