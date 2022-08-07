import React from 'react'
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';

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
            <Button className="view-log, view-log-dark" variant='btn btn-outline-success'> View Log </Button>
            </td>

            <td>
                <Button variant="outline-danger" color="white" > Delete Log </Button>
            </td>

        </>
    )
}





