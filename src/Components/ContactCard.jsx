import React from "react";
import { AST_PropAccess } from "terser";

function ContactCard(props) {
  return (
    <div className="contact-card">
      <h3>{props.name}</h3>
      <img src={props.imgUrl} className="contact_photo" />
      <p>Address: {props.address}</p>
    </div>
  );
}

export default ContactCard;
