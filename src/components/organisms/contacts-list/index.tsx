import React from "react";
import PersonInfo from "components/molecules/person-info";
import { Person } from "types";

type Props = {
  collection: Person[];
};

function ContactList({ collection }: Props): JSX.Element {
  return (
    <>
      {collection.map(
        (personInfo: Person): JSX.Element => (
          <PersonInfo key={personInfo.id} data={personInfo} />
        )
      )}
    </>
  );
}

export default ContactList;
