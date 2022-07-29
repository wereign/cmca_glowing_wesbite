import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

export default function ProjectRow({ name, duration, complete }) {
    return (
        <>

        
            <td>
                {name}
            </td>

            <td>
                {displayStatus(complete)}
            </td>

            <td>
                {duration}
            </td>


            <td>
                <Link className="btn btn-primary" role="button" to="/project-logs">View Project </Link>

            </td>

        </>
    )
}

function displayStatus(complete) {

    if (complete) {
        return "COMPLETE"
    }

    else {
        return "IN-PROGRESS"
    }

}
