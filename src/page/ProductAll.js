import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log("searchQuery: ", searchQuery)
    let url = `http://localhost:4000/products?q=${searchQuery}`;
    // let url = `https://my-json-server.typicode.com/<kimsh0306>/<noona-project-hnm>/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts()
  }, [query]);

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
