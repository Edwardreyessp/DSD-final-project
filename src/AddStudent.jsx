import { Box, Button, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const [boleta, setBoleta] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [correo, setCorreo] = useState("");

  const [selectedImage, setSelectedImage] = useState(
    "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
  );
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // Activa el input de tipo file cuando se hace clic en el botón
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        // Actualiza el estado con la nueva imagen seleccionada
        setSelectedImage(e.target.result);
      };

      // Lee el contenido de la imagen como una URL
      reader.readAsDataURL(file);
    }
  };

  const validatePassword = () => {
    // Debe contener al menos una mayúscula, una minúscula, un número y un carácter especial
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    if (regex.test(password)) {
      console.log("Contraseña válida");
      setIsPasswordValid(true);
    } else {
      console.log("Contraseña inválida");
      setIsPasswordValid(false);
    }
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
      <Typography variant="h1">Agregar Alumno</Typography>
      <img src={selectedImage} alt="alumno" width={200} />
      <Button variant="contained" onClick={handleButtonClick}>
        Elegir foto de perfil
      </Button>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        ref={fileInputRef}
      />
      <Box display="flex" flexDirection="column" width={550} gap="1rem">
        <TextField
          fullWidth
          label="Boleta"
          value={boleta}
          onChange={(e) => setBoleta(e.target.value)}
        />
        <TextField
          fullWidth
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          label="Apellido Paterno"
          value={apellidoPaterno}
          onChange={(e) => setApellidoPaterno(e.target.value)}
        />
        <TextField
          fullWidth
          label="Apellido Materno"
          value={apellidoMaterno}
          onChange={(e) => setApellidoMaterno(e.target.value)}
        />
        <TextField
          fullWidth
          label="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
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
        Registrar Alumno
      </Button>
    </Box>
  );
};

export default AddStudent;
