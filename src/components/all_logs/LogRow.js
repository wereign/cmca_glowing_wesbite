import React from 'react'
import { Link } from 'react-router-dom';

export default function LogRow({ name, duration, complete }) {
    return (
        <>
            <td>
                {name}
            </td>

            <td>
                {duration}
            </td>

            <td>
            <Link className="btn btn-outline-dark" role="button" to="#"> View Log </Link>
            </td>

        </>
    )
}





