import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const validatePassword = () => {
    //link to dashboard
    window.location.href = "/admin";

    /* // Debe contener al menos una mayúscula, una minúscula, un número y un carácter especial
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    if (regex.test(password)) {
      console.log("Contraseña válida");
      setIsPasswordValid(true);
    } else {
      console.log("Contraseña inválida");
      setIsPasswordValid(false);
    }*/
  };

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
      <Box width={550} display="flex" flexDirection={"column"} gap="1rem">
        <TextField
          fullWidth
          label="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          label="Contraseña"
          error={!isPasswordValid}
          helperText={
            !isPasswordValid
              ? "Debe contener al menos una mayúscula, una minúscula, un número y un carácter especial"
              : ""
          }
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Button variant="contained" onClick={validatePassword}>
        Iniciar Sesión
      </Button>
    </Box>
  );
}

export default App;
