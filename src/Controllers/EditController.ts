import { EditLogic } from "../Models/EditLogic";
import { EditView } from "../Views/EditView";

export class EditController {
  private editLogic: EditLogic;
  private editView: EditView;

  constructor(EditLogic: EditLogic, EditView: EditView) {
    this.editLogic = EditLogic;
    this.editView = EditView;
  }

  async getListener(): Promise<any> {
    await this.editLogic.get();
    this.editView.view();
    let editFriendSubmit = document.getElementById('eidtFriendSubmit');
    if(!editFriendSubmit) return;
    editFriendSubmit.addEventListener('click', this.postListener.bind(this));
    this.clickListener();
  }

  clickListener(): void {
    let target: any = document.getElementsByClassName('base-anchor');
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        const element = target[key];
        element.addEventListener('click', (event: any) => this.backToTopOnClick(event, element.href));
      }
    }
  }

  async postListener(event: any): Promise<any> {
    await this.editLogic.post(event);
  }

  backToTopOnClick(event: any, param: string): void {
    history.replaceState(null, '', param);
    document.body.innerHTML ='';
    event.preventDefault();
  }
}