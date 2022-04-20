import React from "react";
import ContactsTemplate from "components/templates/contacts-template";
import Container from "components/atoms/container";

function ContactsPage(): JSX.Element {
  return (
    //Header
    <Container>
      <ContactsTemplate />
    </Container>
    //Footer
  );
}

export default ContactsPage;
