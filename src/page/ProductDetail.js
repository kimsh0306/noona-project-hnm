import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [product, setProduct] = useState(null);

  let { id } = useParams();

  const getProductDetail = async () => {
    // let url = `http://localhost:4000/products/${id}`;
    let url = `https://my-json-server.typicode.com/<kimsh0306>/<noona-project-hnm>/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  const sizeBtn = (item) => {
    setSelectedSize(item);
  };

  useEffect(() => {
    getProductDetail()
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <img src={product?.img} />
        </Col>
        <Col>
          <div className='detail-title'>
            <h3>{product?.title}</h3>
            {product?.new ? <div>new</div> : ""}
          </div>
          <div className='detail-price'>
            <p><strong>₩{product?.price}</strong></p>
            <div>{product?.choice ? "consious choice!" : ""}</div>
          </div>
          <div className='detail-sizeList'>
            {product?.size.map((item, idx) => (
              <div
                className={selectedSize == item ? "detail-size seleced" : "detail-size"}
                key={idx}
                onClick={() => sizeBtn(item)}
              >
                {item}
              </div>
            ))}
          </div>
          <button type="button" className='detail-btn'>추가</button>
          <div className='detail-info'>
            <InfoOutlinedIcon />
            <p >일반 배송 (2-3 일, 영업일 기준,￦2,900)</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail