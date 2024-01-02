import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

function createData(name, FiCut, SeCut, ThCut, AvG) {
  return { name, FiCut, SeCut, ThCut, AvG };
}

const rows = [
  createData("Pedro Ramirez R ", 7, 7, 7),
  createData("Juan Sanchez B", 5, 5, 8),
  createData("Gustavo Gusman G", 3, 2, 10),
];

export default function TableAdmin() {
  const [editableRows, setEditableRows] = React.useState(rows);

  const handleInputChange = (event, name, key) => {
    const updatedRows = editableRows.map((row) =>
      row.name === name
        ? { ...row, [key]: parseInt(event.target.value, 10) }
        : row
    );
    setEditableRows(updatedRows);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <div>
        <h1>Alumnos</h1>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell align="right">1r Parcial</TableCell>
                <TableCell align="right">2ndo Parcial</TableCell>
                <TableCell align="right">3r Parcial</TableCell>
                <TableCell align="right">Promedio</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {editableRows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      type="number"
                      value={row.FiCut}
                      onChange={(e) => handleInputChange(e, row.name, "FiCut")}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      type="number"
                      value={row.SeCut}
                      onChange={(e) => handleInputChange(e, row.name, "SeCut")}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      type="number"
                      value={row.ThCut}
                      onChange={(e) => handleInputChange(e, row.name, "ThCut")}
                    />
                  </TableCell>
                  <TableCell align="right">
                    {(row.FiCut + row.SeCut + row.ThCut) / 3}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
          Guardar
        </Button>
      </div>
    </Container>
  );
}
