import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class databaseService {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug, // we also use ID.unique() for Document id but here we use slug
        {
          title,
          slug,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite :: createPost :: error ", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite :: updatePost :: error ", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite :: deletePost :: error ", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite :: getPost :: error ", error);
    }
  }

  async getActivePost(query = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        query
      );
    } catch (error) {
      console.log("Appwrite :: getActivePost :: error ", error);
      return false;
    }
  }

  // File Upload or Delete Services

  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        config.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite :: uploadFile :: error ", error);
      return false;
    }
  }

  async deleteFile(fileId){
    try {
        await this.storage.deleteFile(
            config.appWriteBucketId,
            fileId,
        )
        return true;
    } catch (error) {
        console.log("Appwrite :: deleteFile :: error ", error);
        return false;
    }
  }

  async filePreview(fileId){     //get file preview is fast so dont neet to async use direct
    try {
        return await this.storage.getFilePreview(
            config.appWriteBucketId,
            fileId,
        )
    } catch (error) {
        console.log("Appwrite :: filePreview :: error ", error);
    }
  }
}

const databaseservice = new databaseService();
export default databaseservice;
