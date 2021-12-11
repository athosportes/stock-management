import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Rotas from "./routes";
import Menu from "../components/Menu";
import { ListaDeProdutos } from "../components/ListaDeProdutos";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";

const useStyles = makeStyles({
  teste: {
    padding: '20px'
  },
});

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
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <div className={classes.teste}>
        <Typography align="center" variant="h5" color='primary'>
          Stock Product Control
        </Typography>
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
