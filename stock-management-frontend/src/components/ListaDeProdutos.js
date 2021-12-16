import axios from "axios";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Button from "@mui/material/Button";
import {mensagemErro, mensagemSucesso} from './toast'

export class ListaDeProdutos extends React.Component {
  state = {
    description: "",
    brand: "",
    barcode: null,
    currentQuantity: null,
    minAlert: null,
    errorMsg: null,
    statusResponse: null,
  };



  cadastrar = () => {
    axios
      .post("https://stock-management-aportes.herokuapp.com/api/product-control/create-product", {
        description: this.state.description,
        brand: this.state.brand,
        barcode: this.state.barcode,
        currentQuantity: this.state.currentQuantity,
        minAlert: this.state.minAlert,
      })
      .then((response) => {
        this.setState({ statusResponse: response.status });
        console.log("Status quando OK: ", response.status);
        mensagemSucesso()
      })
      .catch((erro) => {
        this.setState({
          errorMsg: erro.response.data,
          statusResponse: erro.response.status,
        });
        mensagemErro(erro.response.data)
        console.log(erro.response.data)
      });
  };

  render() {
    return (
      <>
        <div>
          <Typography
            align="center"
            variant="h5"
            color="primary"
            sx={{ padding: "10px" }}
          >
            {" "}
            Stock Product Managemnet{" "}
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                display: "flex",
                marginLeft: "5%",
                marginRight: "5%",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              required="true"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />

            <TextField
              id="outlined-basic"
              label="Brand"
              variant="outlined"
              required="true"
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
            <Box sx={{ mx: "auto", textAlign: "center" }}>
              <Button
                variant="contained"
                onClick={this.cadastrar}
                sx={{ width: "90%" }}
              >
                Save product
              </Button>
            </Box>
          </Box>
        </div>
      </>
    );
  }
}
