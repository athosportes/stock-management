import React from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export class ListaDeProdutos extends React.Component {
  state = {
    description: "",
    brand: "",
    barcode: null,
    currentQuantity: null,
    minAlert: null,
  };



  cadastrar = () => {
    axios
      .post("http://localhost:8080/api/product-control/create-product", {
        description: this.state.description,
        brand: this.state.brand,
        barcode: this.state.barcode,
        currentQuantity: this.state.currentQuantity,
        minAlert: this.state.minAlert,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((erro) => {
        console.log(erro.response);
      });
  };

  limparCampos = () => {
    this.setState({description: null, brand: null})
    }

  render() {
    return (
      <>
        <div>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "80vw" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />

            <TextField
              id="outlined-basic"
              label="Brand"
              variant="outlined"
              value={this.state.brand}
              onChange={(e) => this.setState({ brand: e.target.value })}
            />

            <TextField
              id="outlined-basic"
              label="Barcode"
              variant="outlined"
              value={this.state.barcode}
              onChange={(e) => this.setState({ barcode: e.target.value })}
            />

            <TextField
              id="outlined-basic"
              label="Current Quantity"
              variant="outlined"
              value={this.state.currentQuantity}
              onChange={(e) =>
                this.setState({ currentQuantity: e.target.value })
              }
            />

            <TextField
              id="outlined-basic"
              label="Min Alert"
              variant="outlined"
              value={this.state.minAlert}
              onChange={(e) => this.setState({ minAlert: e.target.value })}
            />

          </Box>
        </div>

        <Button
          variant="contained"
          sx={{ alignContent: "rigth" }}
          onClick={(this.cadastrar)}
        >
          Salvar Produto
        </Button>
      </>
    );
  }
}