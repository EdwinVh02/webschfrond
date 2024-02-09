import React from "react";
import { Paper, Box, Typography } from "@mui/material";

function Item({ item }) {
  return (
    <Paper elevation={3}>
      <Box p={2}>
        <img
          src={item.imagen}
          alt={item.titulo}
          style={{ width: "100%", height: "50vh", objectFit: "cover" }}
        />
      </Box>
      <Box p={2} textAlign="center">
        <Typography variant="h6" gutterBottom>
          {item.titulo}
        </Typography>
      </Box>
    </Paper>
  );
}

export default Item;
