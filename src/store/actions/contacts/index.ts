import Constants from "store/constants";
import { Person, Action } from "types";

export const contactsGetAll = (
  skip: number,
  onSuccessCallback: (response: Person[]) => void,
  onErrorCallback: () => void
): Action<Person[], number> => ({
  type: Constants.GET_ALL_CONTACTS,
  payload: skip,
  onSuccessCallback,
  onErrorCallback,
});
