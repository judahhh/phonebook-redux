import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();
  // const getName = (e) => {
  //   setName(e.target.value); //아예 onChange에서 익명의 함수를 만들어주자
  // };
  // const getPhoneNumber = (e) => {
  //   setPhoneNumber(e.target.value);
  // };

  const addContact = (e) => {
    e.preventDefault(); //새로고침 되는 현상 막음
    dispatch({
      type: "ADD_CONTACT",
      payload: { name: name, phoneNumber: phoneNumber }, //얘네는 한단어로 줄임 가능
    });
    e.target.reset();
  };

  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="이름을 입력하세요"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="number"
            placeholder="전화번호를 입력해주세요"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          저장
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
