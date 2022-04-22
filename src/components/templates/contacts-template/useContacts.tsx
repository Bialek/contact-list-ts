import { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { contactsGetAll } from "store/actions/contacts";
import { Person } from "types";

type HookReturningType = {
  isLoading: boolean;
  filteredContactsList: Person[];
  requestContactsList: () => void;
  selectedContactsList: Person[];
  selectContactCallback: (selectedContact: Person) => void;
  unselectContactCallback: (selectedContact: Person) => void;
};

function useContacts(): HookReturningType {
  const dispatch = useDispatch();

  const [contactsList, setContactsList] = useState<Person[]>([]);
  const [selectedContactsCollection, setSelectedContactsCollection] = useState(
    new Map<string, Person>()
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const requestContactsList = useCallback((): void => {
    setIsLoading(true);
    const onSuccessCalback = (response: Person[]): void => {
      setContactsList((prevState: Person[]): Person[] => [
        ...prevState,
        ...response,
      ]);

      setIsLoading(false);
    };
    const onErrorCallback = (): void => setIsLoading(false);

    dispatch(
      contactsGetAll(contactsList.length, onSuccessCalback, onErrorCallback)
    );
  }, [dispatch, setIsLoading, contactsList.length]);

  useEffect((): void => {
    if (contactsList.length === 0) {
      requestContactsList();
    }
  }, [requestContactsList, contactsList.length]);

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
