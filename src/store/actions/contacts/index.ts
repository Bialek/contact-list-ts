import Constants from "store/constants";
import { Person, Action } from "types";

export const contactsGetAll = (
  onSuccessCallback: (response: Person[]) => void
): Action<Person[], undefined> => ({
  type: Constants.GET_ALL_CONTACTS,
  onSuccessCallback,
});
