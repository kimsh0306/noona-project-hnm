import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';

const ProductAll = () => {

  const [productList, setProductList] = useState([]);
  
  const getProducts = async () => {
    let url = "http://localhost:4000/products";
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts()
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((mene, idx) => (
            <Col lg={3} key={idx}>
              <ProductCard item={mene} />
            </Col>
          ))}
        </Row>
      </Container>
      <ProductCard />
    </div>
  )
}

export default ProductAll
