import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product";
import waffle from "../images/image-waffle-desktop.jpg";
import vanilla from "../images/image-creme-brulee-desktop.jpg";
import macarone from '../images/image-macaron-desktop.jpg'
import Tiramisu from '../images/image-tiramisu-desktop.jpg'
import Baklava from '../images/image-baklava-desktop.jpg'
import Pie from '../images/image-creme-brulee-desktop.jpg'
import Cake from '../images/image-cake-desktop.jpg'
import Brownie from '../images/image-brownie-desktop.jpg'
import Panna from '../images/image-panna-cotta-desktop.jpg'
const Products = () => {
  const products = [
    { photo: waffle, Title: "Waffle", Info: "Waffle with Berries", Price: "6.50" },
    { photo: vanilla, Title: "Crème Brûlée", Info: "Vanilla Bean Crème Brûlée", Price: "7.00" },
    { photo: macarone, Title: "Macaron", Info: "Macaron Mix of Five", Price: "8.00" },
    { photo: Tiramisu, Title: "Tiramisu", Info: "Classic Tiramisu", Price: "5.50" },
    { photo: Baklava, Title: "Baklava", Info: "Pistachio Baklava", Price: "4.00" },
    { photo: Pie, Title: "Pie", Info: "Lemon Meringue Pie", Price: "5.00" },
    { photo: Cake, Title: "Cake", Info: "Red Velvet Cake", Price: "4.50" },
    { photo: Brownie, Title: "Brownie", Info: "Salted Caramel Brownie", Price: "4.50" },
    { photo: Panna, Title: "Panna Cotta", Info: "Vanilla Panna Cotta", Price: "6.50" },
  ];

  return (
    <Container>
      <h1 className="fs-3 fw-bold mb-4">Desserts</h1>
      <Row className="gy-4">
        {products.map((product, index) => (
          <Col key={index} lg={4} md={6} sm={12}>
            <Product {...product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
