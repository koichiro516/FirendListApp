import { AddLogic } from "../Models/AddLogic";
import { AddView } from "../Views/AddView";

export class AddController {
  private addLogic: AddLogic;
  private addView: AddView;

  constructor(addLogic: AddLogic, addView: AddView) {
    this.addLogic = addLogic;
    this.addView = addView;
    this.loadListener();
  }

  loadListener(): void {
    this.addView.view();
    let addFriendSubmit = document.getElementById('addFriendSubmit');
    if(!addFriendSubmit) return;
    addFriendSubmit.addEventListener('click', this.postListener.bind(this));
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
    await this.addLogic.post(event);
  }

  backToTopOnClick(event: any, param: string): void {
    history.replaceState(null, '', param);
    document.body.innerHTML ='';
    event.preventDefault();
  }
}