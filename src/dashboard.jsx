import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

const DashboardAdmin = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      <Typography variant="h2" sx={{ mb: 4 }}>
        Bienvenido a SAES 2.0
      </Typography>
      <Typography variant="h3" sx={{ mb: 4, fontWeight: "bold" }}>
        Administrador Jose Perez Carmelo
      </Typography>
      <Link to="/materias" style={{ textDecoration: "none" }}>
        <Card variant="outlined" sx={{ mb: 2, cursor: "pointer" }}>
          <CardContent>
            <Typography variant="h4" component="div">
              Materias
            </Typography>
          </CardContent>
        </Card>
      </Link>
      <Link to="/alumnos" style={{ textDecoration: "none" }}>
        <Card variant="outlined" sx={{ mb: 2, cursor: "pointer" }}>
          <CardContent>
            <Typography variant="h4" component="div">
              Alumnos
            </Typography>
          </CardContent>
        </Card>
      </Link>
      <Link to="/alta-alumnos" style={{ textDecoration: "none" }}>
        <Card variant="outlined" sx={{ mb: 2, cursor: "pointer" }}>
          <CardContent>
            <Typography variant="h4" component="div">
              Dar de alta alumnos
            </Typography>
          </CardContent>
        </Card>
      </Link>
      <Button
        component={Link}
        to="/salir"
        variant="contained"
        color="primary"
        size="large"
        sx={{ mb: 2 }}
      >
        Salir
      </Button>
    </Container>
  );
};

export default DashboardAdmin;
