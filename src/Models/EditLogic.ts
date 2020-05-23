import { ApiCall } from './ApiCall';
import { UserModel } from './UserModel';

export class EditLogic {
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

  async post(event: any): Promise<any> {
    event.preventDefault();

    if(this.isValid()) {
      return;
    }

    let postData = this.createPostData();
    console.log('postRecest');

    try {
      let apiCall: ApiCall = new ApiCall();
      await apiCall.editUserByCollectionId(postData)
        .then(response => {
          console.log(response);
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

  isValid(): boolean {
    let fieldName: HTMLInputElement = <HTMLInputElement> document.getElementById('name');
    let fieldMail: HTMLInputElement = <HTMLInputElement> document.getElementById('mail');
    let fieldBirthday: HTMLInputElement = <HTMLInputElement> document.getElementById('birthday');
    let fieldFavorite: HTMLInputElement = <HTMLInputElement> document.getElementById('favorite');
    let fieldRemarks: HTMLInputElement = <HTMLInputElement> document.getElementById('remarks');

    if(!fieldName.value) return true;
    if(!fieldMail.value) return true;
    if(!fieldBirthday.value) return true;
    if(!fieldFavorite.value) return true;
    if(!fieldRemarks.value) return true;

    this._userModel.fieldsName = fieldName.value;
    this._userModel.fieldsMail = fieldMail.value;
    this._userModel.fieldsBirthday = fieldBirthday.value;
    this._userModel.fieldsFavorite = fieldFavorite.value;
    this._userModel.fieldsRemarks = fieldRemarks.value;
    return false;
  }

  createPostData(): object {
    const postData = {
      "writes": [
        {
          "updateMask": {
            "fieldPaths": [
              "name",
              "mail",
              "birthday",
              "favorite",
              "remarks"
            ]
          },
          "update": {
            "name": this._userModel._originalName,
            "fields": this._userModel._fields
          }
        }
      ]
    }

    console.log(postData)
    return postData;
  }

  get users(): any{
    return this._userModel;
  }
}