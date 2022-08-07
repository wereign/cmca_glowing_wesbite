import "./userList.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(username, role, mailId) {
  return { username, role, mailId };
}

const rows = [
  createData('Bruce Wayne', 'Organizer', 'brucebat@gmail.com'),
  createData('Donald Trump', 'Student', 'donaldtrump@gamil.com'),
  createData('Thomas Shelby', 'Organizer', 'thomasshell@gamil.com'),
  createData('Peter Parker', 'Organizer', 'neighbourhoodspidey@gmail.com'),
  createData('Virenn Jay', 'Student', 'virennnuts@gmail.com'),
  createData('Roshan Baby', 'Student', 'babypasta@gmail.com'),
  createData('Isha Syed', 'Alumni', 'dokoshish@gmail.com'),
  createData('X ae A-12', 'Organizer', 'whythatname@gmail.com'),
];

const UserList = () => {
  return (
    <TableContainer component={Paper} className="userList">
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table">
        <TableHead>
          <TableRow>
            <TableCell className="heading">Username</TableCell>
            <TableCell align="center" className="heading">Email ID</TableCell>
            <TableCell align="left" className="heading">Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.username}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className="content">
                {row.username}
              </TableCell>
              <TableCell align="center" className="content">{row.mailId}</TableCell>
              <TableCell align="left" className="content">{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UserList;
