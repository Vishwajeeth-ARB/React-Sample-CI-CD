import { React, Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          productno: 111,
          name: "IPhone",
          manufacturer: "Apple",
          price: "Rs. 45000",
        },
        {
          productno: 121,
          name: "IPad",
          manufacturer: "Apple",
          price: "Rs. 34500",
        },
        {
          productno: 131,
          name: "IPod",
          manufacturer: "Apple",
          price: "Rs. 32222",
        },
        {
          productno: 141,
          name: "Moto G",
          manufacturer: "Motorola",
          price: "Rs. 35678",
        },
        {
          productno: 151,
          name: "Moto X",
          manufacturer: "Motorola",
          price: "Rs. 43434",
        },
      ],
    };
  }
  render() {
    const info = this.state.products.map((data) => {
      return <li>{data.productno}</li>;
    });
    return <li>{info}Hello</li>;
  }
}

export default Product;
