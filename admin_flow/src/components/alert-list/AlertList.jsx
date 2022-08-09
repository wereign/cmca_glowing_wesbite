import "./alertList.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function createData(date, location, content) {
    return { date, location, content };
}

const rows = [
    createData("1st August, 2022", "Delhi", "This will be the content of the announcement, this is just a placeholder and filled with filler words"),
    createData("23rd July, 2022", "Mumbai", "This will be the content of the announcement, this is just a placeholder and filled with filler words"),
    createData("20th July, 2022", "Pune", "This will be the content of the announcement, this is just a placeholder and filled with filler words"),
    createData("11th June, 2022", "Jaipur", "This will be the content of the announcement, this is just a placeholder and filled with filler words"),
    createData("1st June, 2022", "Maharashtra", "This will be the content of the announcement, this is just a placeholder and filled with filler words"),
    createData("18th May, 2022", "Tamil Nadu", "This will be the content of the announcement, this is just a placeholder and filled with filler words"),
    createData("11th May, 2022", "Delhi", "This will be the content of the announcement, this is just a placeholder and filled with filler words"),
    createData("2nd May, 2022", "Karnataka", "This will be the content of the announcement, this is just a placeholder and filled with filler words"),
];

const AlertList = () => {
  return (
    <TableContainer component={Paper} className="alert-table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table">
        <TableHead>
          <TableRow>
            <TableCell className="heading">Date</TableCell>
            <TableCell align="left" className="heading">
                Location
                <LocationOnIcon className="icon"/>
                </TableCell>
            <TableCell align="right" className="heading">Announcement</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.date}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className="content">
                    {row.date}
              </TableCell>
              <TableCell align="left" className="content">
                {row.location}
              </TableCell>
              <TableCell align="right" className="content">{row.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AlertList
