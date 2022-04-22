import { Person } from "types";
import apiData from "./api";

class ContactService {
  public async getAll(skip: number): Promise<Person[]> {
    const result: Person[] = await apiData(skip); // here should be a axios http request

    return result;
  }
}

export default new ContactService();
