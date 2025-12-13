import { StatusCodes } from "./statuscodes";
import { randomUser } from "./utils/library";
import { expect } from "@playwright/test";

export class APIClient {
  constructor(private request: any) {}

  async createUser() {
    const user = randomUser();
    const res = await this.request.post(`${BASE_URL}${API.USERS}`, { data: user });

    if (res.status() === StatusCodes.BAD_REQUEST) {
      console.error("❌ Endpoint limit reached — get a new API key from crudcrud.com");
      throw new Error("CrudCrud limit exceeded");
    }

    expect(res.status()).toBe(StatusCodes.CREATED);
    const body = await res.json();
    console.log("🟢 Created:", body);
    return body;
  }
}
