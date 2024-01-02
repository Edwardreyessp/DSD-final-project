import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Alumno = () => {
  const dataStudent = {
    name: "Edward Daniel Reyes Pérez",
  };

  function createData(name, p1, p2, p3, final) {
    return { name, p1, p2, p3, final };
  }

  const rows = [
    createData("Materia 1", 9, 9, 9, 9),
    createData("Materia 2", 9, 9, 9, 9),
    createData("Materia 3", 9, 9, 9, 9),
    createData("Materia 4", 9, 9, 9, 9),
    createData("Materia 5", 9, 9, 9, 9),
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
          alt="alumno"
          width={200}
        />
        <Typography variant="h1">{dataStudent.name}</Typography>
      </Box>
      <Button variant="contained">Cambiar foto de perfil</Button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Materia</TableCell>
              <TableCell align="right">Primer parcial</TableCell>
              <TableCell align="right">Segundo parcial</TableCell>
              <TableCell align="right">Tercer parcial</TableCell>
              <TableCell align="right">Calificación final</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Alumno;
