import { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { contactsGetAll } from "store/actions/contacts";
import { Person } from "types";

function useContacts() {
  const dispatch = useDispatch();

  const [contactsList, setContactsList] = useState<Person[]>([]);
  const [selectedContactsCollection, setSelectedContactsCollection] = useState(
    new Map<string, Person>()
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const requestContactsList = useCallback((): void => {
    setIsLoading(true);
    dispatch(
      contactsGetAll((response: Person[]): void => {
        setContactsList((prevState: Person[]): Person[] => [
          ...prevState,
          ...response,
        ]);

        setIsLoading(false);
      })
    );
  }, [dispatch, setIsLoading]);

  useEffect((): void => {
    requestContactsList();
  }, [requestContactsList]);

  const selectContactCallback = useCallback((selectedContact: Person): void => {
    setSelectedContactsCollection(
      (prevState: Map<string, Person>): Map<string, Person> => {
        const newState = new Map(prevState);
        newState.set(selectedContact.id, selectedContact);
        return newState;
      }
    );
  }, []);

  const unselectContactCallback = useCallback(
    (selectedContact: Person): void => {
      setSelectedContactsCollection(
        (prevState: Map<string, Person>): Map<string, Person> => {
          const newState = new Map(prevState);
          newState.delete(selectedContact.id);
          return newState;
        }
      );
    },
    []
  );

  const filteredContactsList = useMemo<Person[]>((): Person[] => {
    const newContactList = contactsList.filter(
      (contact: Person): boolean => !selectedContactsCollection.has(contact.id)
    );
    return newContactList;
  }, [contactsList, selectedContactsCollection]);

  const selectedContactsList = useMemo<Person[]>(
    (): Person[] => Array.from(selectedContactsCollection.values()),
    [selectedContactsCollection]
  );

  return {
    isLoading,
    filteredContactsList,
    requestContactsList,
    selectedContactsList,
    selectContactCallback,
    unselectContactCallback,
  };
}

export default useContacts;
