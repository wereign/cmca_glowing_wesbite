import React from 'react'
import { Button} from 'react-bootstrap'

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
                {displayUpdate(complete)}

            </td>
            {/* <Button variant="success">Primary</Button> */}
            {/* <button className='btn btn-primary'>Text Here</button> */}





        </>
    )
}

function displayUpdate(complete) {
    if (complete) {
        return <Button variant="primary disabled">Add Log</Button>;
    }
    else {
        return <Button variant="primary">Add Log</Button>;
        
    }
}


function displayStatus(complete) {

    if (complete){
        return "COMPLETE"
    }

    else {
        return "IN-PROGRESS"
    }

}