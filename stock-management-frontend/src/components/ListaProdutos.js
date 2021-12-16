import React, { useState } from 'react';
import { CreateProduct } from './createProduct'
import axios from "axios";
import {mensagemErro, mensagemSucesso} from './toast'

export default function ListaProdutos() {
    const [description, setDescription] = React.useState(null);
    const [brand, setBrand] = React.useState(null);
    const [barcode, setBarcode] = React.useState(null);
    const [currentQuantity, setCurrentQuantity] = React.useState(null);
    const [minAlert, setMinAlert] = React.useState(null);
    const [errorMsg, setErrorMsg] = React.useState(null);
    const [statusResponse, setStatusResponse] = React.useState(null);


    return(
        <div>
            <CreateProduct />
        </div>
    )

}

const cadastrar = () => {
    axios.post("http://localhost:8080/api/product-control/create-product", {
        /* description,
        brand: this.state.brand,
        barcode: this.state.barcode,
        currentQuantity: this.state.currentQuantity,
        minAlert: this.state.minAlert, */
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