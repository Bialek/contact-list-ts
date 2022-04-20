import React from "react";
import Button from "components/atoms/button";
import PersonInfo from "components/molecules/person-info";
import { useDispatch } from "react-redux";
import { contactsGetAll } from "store/actions/contacts";
import { Person } from "types";
import ContactList from "components/organisms/contacts-list";

function ContactsTemplate(): JSX.Element {
  const dispatch = useDispatch();

  const [data, setData] = React.useState<Person[]>([]);
  const [selected, setSelected] = React.useState([]);

  const requestData = React.useCallback((): void => {
    dispatch(
      contactsGetAll((response: Person[]): void =>
        setData((prevState: Person[]): Person[] => [...prevState, ...response])
      )
    );
  }, [dispatch]);

  React.useEffect((): void => {
    requestData();
  }, [requestData]);

  return (
    <div>
      <div className="selected">Selected contacts: {selected.length}</div>
      <Button
        onClickHandler={requestData}
        text="Load more" //it's should comming from translations
      />

      <ContactList collection={data} />
    </div>
  );
}

export default ContactsTemplate;
