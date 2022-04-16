import { Person } from "types";
import apiData from "./api";

class ContactService {
  public async getAll(): Promise<Person[]> {
    const result: Person[] = await apiData();

    return result;
  }
}

export default new ContactService();
