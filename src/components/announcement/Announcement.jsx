import "./announcement.scss"
import AddCircleIcon from '@mui/icons-material/AddCircle';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(date, content) {
    return {date, content};
}
  
const rows = [
    createData("27th July, 2022", "This will be the content of the announcement displayed here"),
    createData("19th July, 2022", "This will be the content of the announcement displayed here"),
    createData("10th July, 2022", "This will be the content of the announcement displayed here"),
    createData("4th July, 2022", "This will be the content of the announcement displayed here"),
    createData("30th June, 2022", "This will be the content of the announcement displayed here"),
    createData("24th June, 2022", "This will be the content of the announcement displayed here"),
    createData("12th June, 2022", "This will be the content of the announcement displayed here"),
    createData("5th June, 2022", "This will be the content of the announcement displayed here"),
    createData("31st May, 2022", "This will be the content of the announcement displayed here")
];

const Announcement = () => {
  return (
    <div className="announcement">
        <div className="top">
            <h1 className="title">Announcements</h1>
            <AddCircleIcon className="add-icon"/>
        </div>
        <div className="bottom">
            <div className="list-container">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell align="right">Announcement</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                    <TableRow
                        key={row.date}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            {row.date}
                        </TableCell>
                        <TableCell align="right">
                            {row.content}
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            </div>
        </div>
    </div>
  )
}

export default Announcement
