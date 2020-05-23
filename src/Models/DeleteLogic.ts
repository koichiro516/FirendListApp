import { ApiCall } from './ApiCall';
import { UserModel } from './UserModel';

export class DeleteLogic {
  private _userModel!: UserModel;

  async get(): Promise<any> {
    let collectionId = this.getParam('id', location.href);
    if(!collectionId) return;

    try {
      let apiCall: ApiCall = new ApiCall();
      await apiCall.getUserByCollectionId(collectionId)
        .then(response => {
          console.log('response', response);
          this._userModel = new UserModel(response.data.name,
            response.data.fields.name.stringValue,
            response.data.fields.mail.stringValue,
            response.data.fields.birthday.stringValue,
            response.data.fields.favorite.stringValue,
            response.data.fields.remarks.stringValue);
        })
        .catch(err => console.error(`error: ${err}`));
    } catch (error) {
      throw error.response.status;
    }
  }

  async delete(event: any): Promise<any> {
    event.preventDefault();

    let collectionId = this.getParam('id', location.href);
    if(!collectionId) return;

    try {
      let apiCall: ApiCall = new ApiCall();
      await apiCall.deleteUserByCollectionId(collectionId)
        .then(response => {
          console.log('response', response);
        })
        .catch(err => console.error(`error: ${err}`));
    } catch (error) {
      throw error.response.status;
    }
  };


  getParam(keyName: string, query: string) {
    if (!query) query = window.location.href;
    keyName = keyName.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + keyName + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(query);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  get users(): any{
    return this._userModel;
  }
}