import React from "react";
import PersonInfo from "components/molecules/person-info";
import Grid from "components/atoms/grid";
import { Person } from "types";

type Props = {
  collection: Person[];
  onClickCallback: (selectedContact: Person) => void;
  isSelectedList?: boolean;
};

function ContactList({
  collection,
  onClickCallback,
  isSelectedList,
}: Props): JSX.Element {
  return (
    <Grid>
      {collection.map(
        (personInfo: Person): JSX.Element => (
          <PersonInfo
            key={personInfo.id}
            person={personInfo}
            onClickCallback={onClickCallback}
            isSelected={isSelectedList}
          />
        )
      )}
    </Grid>
  );
}

export default ContactList;
