import logo from './logo.svg';
import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const data = {
  123: {
    name: "Alice",
    id: 123,
    dob: "Dec"
  },
  456: {
    name: "Bob",
    id: 456,
    dob: "Nov"
  },
  789: {
    name: "Charlie",
    id: 789,
    dob: "Feb"
  }
};


const data2 = {
  456: {
    name: "Bob",
    id: 456,
    dob: "Nov"
  },
  246: {
    name: "Dave",
    id: 123,
    dob: "Mar"
  },
  135: {
    name: "Eve",
    id: 135,
    dob: "Jun"
  }
};

const data3 = {
  1314: {
    name: "Grace",
    id: 1314,
    dob: "Sept"
  },
  1112: {
    name: "Frank",
    id: 1112,
    dob: "Mar"
  },
  135: {
    name: "Eve",
    id: 135,
    dob: "Jun"
  },
  123: {
    name: "Alice",
    id: 123,
    dob: "Dec"
  }
};


const response = Object.values(data)
const response2 = Object.values(data2)
const response3 = Object.values(data3)
const finalData = []

response.map(res => (
  finalData.push(res)
))
response2.map(res => (
  finalData.push(res)
))
response3.map(res => (
  finalData.push(res)
))

let dupCheck = []
let rows =[]

finalData.map(res => {
  if (!dupCheck.includes(res.name)) {
    rows.push(res)
  }
  dupCheck.push(res.name)
  return rows
})

function App() {
  const classes = useStyles();
  return (
    <div className="App">
   <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">DOB</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.dob}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default App;
