import React from "react";
import Button from "components/atoms/button";
import ContactList from "components/organisms/contacts-list";
import useContacts from "./useContacts";

function ContactsTemplate(): JSX.Element {
  const {
    isLoading,
    filteredContactsList,
    requestContactsList,
    selectedContactsList,
    selectContactCallback,
    unselectContactCallback,
  } = useContacts();

  return (
    <div>
      <ContactList
        collection={selectedContactsList}
        onClickCallback={unselectContactCallback}
        isSelectedList={true}
      />
      <ContactList
        collection={filteredContactsList}
        onClickCallback={selectContactCallback}
      />
      <Button
        onClickHandler={requestContactsList}
        text="Load more" //it's should comming from translations
      />
    </div>
  );
}

export default ContactsTemplate;
