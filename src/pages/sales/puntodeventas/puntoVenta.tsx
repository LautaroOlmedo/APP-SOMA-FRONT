import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardProduct from './components/CardProduct/CardProduct';
import DetailProduct from './components/DetailProduct/DetailProduct';

function PuntoVenta() {
  const renderCardProduct = () => {
    return (
      <CardProduct />
    );
  }
  const renderDetailProduct = () => {
    return (
      <DetailProduct />
    );
  }
  return (
    <>
      <Container style={{ height:"100%"}}>
      <Row style={{ display: "flex"}}>
          {renderCardProduct()}
          {renderDetailProduct()}
        </Row>
      </Container>
    </>
  );
}

export default PuntoVenta;
