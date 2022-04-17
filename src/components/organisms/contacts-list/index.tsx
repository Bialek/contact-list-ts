import PersonInfo from "components/molecules/person-info";
import React from "react";
import { useDispatch } from "react-redux";
import { contactsGetAll } from "store/actions/contacts";
import { Person } from "types";

function ContactList(): JSX.Element {
  const dispatch = useDispatch();

  const [data, setData] = React.useState<Person[]>([]);
  const [selected, setSelected] = React.useState([]);

  React.useEffect((): void => {
    dispatch(contactsGetAll((response: Person[]): void => setData(response)));
  }, []);

  return (
    <div>
      <div className="selected">Selected contacts: {selected.length}</div>
      <div className="list">
        {data.map(
          (personInfo: Person): JSX.Element => (
            <PersonInfo key={personInfo.id} data={personInfo} />
          )
        )}
      </div>
    </div>
  );
}

export default ContactList;
