import { ListLogic } from "../Models/ListLogic";
import { ListView } from "../Views/ListView";

export class ListController {
  private listLogic: ListLogic;
  private listView: ListView;

  constructor(listLogic: ListLogic, listView: ListView) {
    this.listLogic = listLogic;
    this.listView = listView;
  }

  async getListener(): Promise<any> {
    await this.listLogic.get();
    this.listView.view();
    this.clickListener();
  }

  clickListener(): void {
    let target: any = document.getElementsByClassName('base-anchor');
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        const element = target[key];
        element.addEventListener('click', (event: any) => this.onClick(event, element.search));
      }
    }
  }

  onClick(event: any, param: string): void {
    history.replaceState(null, '', param);
    document.body.innerHTML ='';
    event.preventDefault();
  }
}