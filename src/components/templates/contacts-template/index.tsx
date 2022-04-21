import React from "react";
import Button from "components/atoms/button";
import ContactList from "components/organisms/contacts-list";
import useContacts from "./useContacts";
import Loader from "components/atoms/loader";
import Flex from "components/atoms/flex";

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
      <Flex gap="l" alignItems="center">
        <Button
          onClickHandler={requestContactsList}
          text="Load more" //it's should comming from translations
          isDisabled={isLoading}
        />
        {isLoading && <Loader />}
      </Flex>
    </div>
  );
}

export default ContactsTemplate;
