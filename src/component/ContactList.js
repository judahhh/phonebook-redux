import React from "react";
import ContactItem from "./ContactItem";
import SeachBox from "./SeachBox";

const ContactList = () => {
  return (
    <div>
      <h4>연락처 조회</h4>
      <SeachBox />
      <ContactItem />
      <ContactItem />
      <ContactItem />
    </div>
  );
};

export default ContactList;
