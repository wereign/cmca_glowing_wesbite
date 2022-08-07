import "./datatable.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function createData(project, status, date_created, date_updated) {
  return { project, status, date_created, date_updated };
}

const rows = [
  createData('Tree Plantation', "0", "1st August, 2022", "5th August, 2022"),
  createData('Juhu Cleanliness Drive', "0", "24th July, 2022", "5th July, 2022"),
  createData('Pipeline fixing', "0", "23rd July, 2022", "25th July, 2022"),
  createData('Some Unique Project Name', "0", "15th July, 2022", "17th July, 2022"),
  createData('More Projects', "0", "10th July, 2022", "13th July, 2022"),
  createData('Help Society', "0", "2nd July, 2022", "11th July, 2022"),
  createData('Be Nice To Everyone', "0", "18th June, 2022", "19th June, 2022"),
  createData('CMCA is Doing Good', "0", "5th June, 2022", "23rd June, 2022")
];

const Datatable = () => {
  return (
    <TableContainer component={Paper} className="datatable">
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table">
        <TableHead>
          <TableRow>
            <TableCell className="heading">Projects</TableCell>
            <TableCell align="right" className="heading">Status</TableCell>
            <TableCell align="right" className="heading">Date Created</TableCell>
            <TableCell align="right" className="heading">Date Updated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.project}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className="content">
                {row.project}
              </TableCell>
              <TableCell align="right"><span><FiberManualRecordIcon/></span></TableCell>
              <TableCell align="right" className="content">{row.date_created}</TableCell>
              <TableCell align="right" className="content">{row.date_updated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Datatable
