import React from "react";
import { Col, Row } from "react-bootstrap";

const ContactItem = () => {
  return (
    <div>
      <Row>
        <Col lg={2}>
          <img
            width="50px"
            src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
            alt=""
          />
        </Col>
        <Col lg={10}>
          <div>이름</div>
          <div>전화번호</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
