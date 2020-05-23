import axios, { AxiosResponse, AxiosPromise, AxiosInstance } from 'axios'
import { AppConfig } from '../AppConfig';

export class ApiCall implements IApiCall {
  async getUser() {
    try {
      console.log('getRequest');
      return await axios.get(AppConfig.FIREBASE_COLLECTION_ID)
    } catch (error) {
      throw error.response.status;
    }
  }

  async getUserByCollectionId(collectionId: string) {
    try {
      console.log('getRequest');
      return await axios.get(AppConfig.FIREBASE_COLLECTION_ID + `/${collectionId}`);
    } catch (error) {
      throw error.response.status;
    }
  }

  async registerUser(postData: object) {
    try {
      console.log('postRequest');
      return await axios.post(AppConfig.FIREBASE_COLLECTION_ID, postData);
    } catch (error) {
      throw error.response.status;
    }
  }


  async editUserByCollectionId(postData: object) {
    try {
      console.log('postRequest');
      await axios.post(AppConfig.FIREBASE_COMMIT, postData);
    } catch (error) {
      throw error.response.status;
    }
  }

  async deleteUserByCollectionId(collectionId: string) {
    try {
      console.log('deleteRequest');
      return await axios.delete(AppConfig.FIREBASE_COLLECTION_ID + `/${collectionId}`);
    } catch (error) {
      throw error.response.status;
    }
  }

}