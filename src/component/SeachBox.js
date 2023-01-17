import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const SeachBox = () => {
  return (
    <div>
      <Row>
        <Col lg={10}>
          <Form.Control type="text" placeholder="name" />
        </Col>
        <Col lg={2}>
          <Button>찾기</Button>
        </Col>
      </Row>
    </div>
  );
};

export default SeachBox;
