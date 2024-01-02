import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

function createData(name) {
  return { name };
}

const rows = [
  createData("Calculo Diferencial"),
  createData("Matematicas Discretas"),
  createData("Fisica"),
  createData("Algoritmos y Estructuras de Datos"),
  createData("Fundamentos de Programacion"),
  createData("Taller de Etica"),
  createData("Fundamentos de Investigacion"),
  createData("Comunicacion Oral y Escrita"),
];

export default function Materias() {
  const [editableRows, setEditableRows] = React.useState(rows);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <div>
        <h1>Alumnos</h1>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Materias</TableCell>
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
}
