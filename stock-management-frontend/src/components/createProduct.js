import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Button from "@mui/material/Button";

export function CreateProduct(props) {
  return (
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
          onChange={(e) => this.setState({ description: e.target.value })}
        />

        <TextField
          id="outlined-basic"
          label="Brand"
          variant="outlined"
          required="true"
          onChange={(e) => this.setState({ brand: e.target.value })}
        />

        <TextField
          id="outlined-basic"
          label="Barcode"
          variant="outlined"
          onChange={(e) => this.setState({ barcode: e.target.value })}
        />

        <TextField
          id="outlined-basic"
          label="Current Quantity"
          variant="outlined"
          onChange={(e) => this.setState({ currentQuantity: e.target.value })}
        />

        <TextField
          id="outlined-basic"
          label="Min Alert"
          variant="outlined"
          onChange={(e) => this.setState({ minAlert: e.target.value })}
        />
        <Box sx={{ mx: "auto", textAlign: "center" }}>
          <Button
            variant="contained"
            onClick={props.funcaoCadastrar}
            sx={{ width: "90%" }}
          >
            Save product
          </Button>
        </Box>
      </Box>
    </div>
  );
}
