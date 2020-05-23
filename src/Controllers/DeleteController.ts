import { DeleteLogic } from "../Models/DeleteLogic";
import { DeleteView } from "../Views/DeleteView";

export class DeleteController {
  private deleteLogic: DeleteLogic;
  private deleteView: DeleteView;

  constructor(deleteLogic: DeleteLogic, deleteView: DeleteView) {
    this.deleteLogic = deleteLogic;
    this.deleteView = deleteView;
    this.loadListener();
  }

  async loadListener(): Promise<any> {
    await this.deleteLogic.get();
    this.deleteView.view();
    let deleteFriendSubmit = document.getElementById('deleteFriendSubmit');
    if(!deleteFriendSubmit) return;
    deleteFriendSubmit.addEventListener('click', this.deleteListener.bind(this));
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

  async deleteListener(event: any): Promise<any> {
    await this.deleteLogic.delete(event);
  }

  backToTopOnClick(event: any, param: string): void {
    history.replaceState(null, '', param);
    document.body.innerHTML ='';
    event.preventDefault();
  }
}