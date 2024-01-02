import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Button, TextField, Typography } from "@mui/material";

function App() {
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
      <Typography variant="h1">Iniciar Sesión</Typography>
      <TextField label="Usuario" />
      <TextField label="Contraseña" />
      <Button variant="contained">Iniciar Sesión</Button>
    </Box>
  );
}

export default App;
