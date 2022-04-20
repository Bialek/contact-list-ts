import React from "react";
import PersonInfo from "components/molecules/person-info";
import Grid from "components/atoms/grid";
import { Person } from "types";

type Props = {
  collection: Person[];
};

function ContactList({ collection }: Props): JSX.Element {
  return (
    <Grid>
      {collection.map(
        (personInfo: Person): JSX.Element => (
          <PersonInfo key={personInfo.id} data={personInfo} />
        )
      )}
    </Grid>
  );
}

export default ContactList;
