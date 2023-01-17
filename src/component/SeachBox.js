import React from "react";
import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
const SeachBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  const searchByName = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH_CONTACT", payload: { keyword } });
  };
  return (
    <div>
      <Form onSubmit={searchByName} className="search-form"></Form>
      <Row>
        <Col lg={10}>
          <Form.Control
            onChange={(e) => setKeyword(e.target.value)}
            type="text"
            placeholder="name"
          />
        </Col>
        <Col lg={2}>
          <Button>찾기</Button>
        </Col>
      </Row>
      <Form />
    </div>
  );
};

export default SeachBox;
