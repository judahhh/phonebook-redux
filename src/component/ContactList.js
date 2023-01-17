import React from "react";
import ContactItem from "./ContactItem";
import SeachBox from "./SeachBox";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  return (
    <div>
      <h4>연락처 조회</h4>
      <SeachBox />
      {contactList.map((item) => (
        <ContactItem item={item} />
      ))}
    </div>
  );
};

export default ContactList;
