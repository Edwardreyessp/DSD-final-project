import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Asignadas = () => {
  const initialCourses = [
    "Calculo Diferencial",
    "Matematicas Discretas",
    "Fisica",
    "Algoritmos y Estructuras de Datos",
    "Fundamentos de Programacion",
    "Taller de Etica",
    "Fundamentos de Investigacion",
    "Comunicacion Oral y Escrita",
  ];

  const [assignedCourses, setAssignedCourses] = useState(initialCourses);
  const [coursesToRemove, setCoursesToRemove] = useState([]);

  const removeCourse = (course) => {
    setCoursesToRemove((prevCourses) => [...prevCourses, course]);
  };

  const reuseCourse = (course) => {
    setCoursesToRemove((prevCourses) =>
      prevCourses.filter((c) => c !== course)
    );
  };

  const isCourseMarkedForRemoval = (course) => {
    return coursesToRemove.includes(course);
  };

  return (
    <div>
      <h1>Materias Asignadas</h1>
      <Grid container spacing={2}>
        {assignedCourses.map((course, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                backgroundColor: isCourseMarkedForRemoval(course)
                  ? "#FFCDD2"
                  : "#C8E6C9",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Typography variant="h6">{course}</Typography>
              </CardContent>
              <CardContent>
                {isCourseMarkedForRemoval(course) ? (
                  <Button
                    onClick={() => reuseCourse(course)}
                    color="primary"
                    fullWidth
                  >
                    Inscribir
                  </Button>
                ) : (
                  <Button
                    onClick={() => removeCourse(course)}
                    color="error"
                    fullWidth
                  >
                    Dar de Baja
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Asignadas;
