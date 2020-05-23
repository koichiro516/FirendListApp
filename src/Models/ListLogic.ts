import { ApiCall } from './ApiCall';
import { UserModel } from './UserModel';
import { AppConfig } from '../AppConfig';

export class ListLogic {
  private _friendlist: UserModel[] = [];

  async get(): Promise<any> {
    let apiCall: ApiCall = new ApiCall();
    try {
     await apiCall.getUser()
        .then(response => {
          console.log('response', response);
          this._friendlist = [];
          response.data.documents.forEach((item: any, index: number) => {
            item.name.replace(AppConfig.FIREBASE_REQUEST_URL, '');

            this._friendlist.push(new UserModel(item.name,
              item.fields.name.stringValue,
              item.fields.mail.stringValue,
              item.fields.birthday.stringValue,
              item.fields.favorite.stringValue,
              item.fields.remarks.stringValue));
          })
      })
      .catch(err => console.error(`error: ${err}`));
    } catch (error) {
      throw error.response.status;
    }
  }

  get users(): any{
    return this._friendlist;
  }
}