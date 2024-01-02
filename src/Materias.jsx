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

  const handleRowClick = (name) => {
    // You can perform actions when a row is clicked, e.g., navigate to a different route
    window.location.href = "/admin/materias/calificaciones";
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
              </TableRow>
            </TableHead>
            <TableBody>
              {editableRows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => handleRowClick(row.name)}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
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
