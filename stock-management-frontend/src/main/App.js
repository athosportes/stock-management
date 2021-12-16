import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Rotas from "./routes";
import Menu from "../components/Menu";
import ListaDeProdutos from "../components/ListaProdutos";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";

import 'toastr/build/toastr.min.js'
import 'toastr/build/toastr.css'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#393E46",
      },
      secondary: {
        main: "#FD7013",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <div>
        <Typography align="center" variant="h5" color="primary"></Typography>
        <ListaDeProdutos /> 
      </div>
      <Rotas />
    </ThemeProvider>
  );
}

export default App;

//PRETO #222831
//CINZA #393E46
//LARANJA #FD7013
//GELO #EEEEEE
