// import { get } from "react-hook-form";
import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        return this.loginAccount(email, password);         // directly login after create account
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite service :: createAccount :: error ", error);
    }
  }

  async login({ email, password }) {
    try {
      const verify = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return verify;
    } catch (error) {
      console.log("Appwrite service :: login :: error ", error);
    }
    return null;
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
      
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error ", error);
    }
    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error ", error);
    }
    return null;
  }
}

const authservice = new AuthService();

export default authservice;
