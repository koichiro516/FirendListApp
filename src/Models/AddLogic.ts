import { ApiCall } from './ApiCall';
import { UserModel } from './UserModel';
import { AppConfig } from '../AppConfig';

export class AddLogic {
  private _friendData!: UserModel;

  async post(event: any): Promise<any> {
    event.preventDefault();

    if(this.isValid()) {
      return;
    }

    let postData = this.createPostData();

    try {
      let apiCall: ApiCall = new ApiCall();
      await apiCall.registerUser(postData)
        .then(response => {
          console.log(response);
      })
      .catch(err => console.error(`error: ${err}`));
    } catch (error) {
      throw error.response.status;
    }
  };

  isValid(): boolean {
    let fieldName: HTMLInputElement = <HTMLInputElement> document.getElementById('name');
    let fieldMail: HTMLInputElement = <HTMLInputElement> document.getElementById('mail');
    let fieldBirthday: HTMLInputElement = <HTMLInputElement> document.getElementById('birthday');
    let fieldFovorite: HTMLInputElement = <HTMLInputElement> document.getElementById('favorite');
    let fieldRemarks: HTMLInputElement = <HTMLInputElement> document.getElementById('remarks');

    if(!fieldName.value) return true;
    if(!fieldMail.value) return true;
    if(!fieldBirthday.value) return true;
    if(!fieldFovorite.value) return true;
    if(!fieldRemarks.value) return true;

    this._friendData = new UserModel(null,
      fieldName.value,
      fieldMail.value,
      fieldBirthday.value,
      fieldFovorite.value,
      fieldRemarks.value);
    return false;
  }

  createPostData(): object {
    const postData = {
      fields: this._friendData._fields
    }

    return postData;
  }
}