import React from 'react'
// import './survey.css'

const Survey = () => {
    return (
        <>
            <h3>Survey</h3>
            <label htmlFor = "Streaming Platform">Which streaming platforms (e.g., Netflix, Hulu, Max, Disney+) Do you currently subscribe to?</label>
            <select className="form-select" id="streamingPlatform">
                <option selected>Choose...</option>
                <option selected>Netflix</option>
                <option selected>Hulu</option>
                <option selected>Max</option>
                <option selected>Disney+</option>
                <option selected>Other</option>
            </select>

            <p>Do you prefer to binge-watch entire seasons at once, or watch weekly episode releases?</p>
            <p>What is your all-time favorite TV Show?</p>
            <p>"What is your favorite genre (e.g., Sci-Fi, Comedy, True Crime, Drama, Reality TV)"</p>

        </>
    )

}
export default Survey