import axios from 'axios'
import { AppConfig } from './AppConfig'
import { ListLogic } from './Models/ListLogic';
import { ListView } from './Views/ListView';
import { ListController } from './Controllers/ListController';
import { AddLogic } from './Models/AddLogic';
import { AddView } from './Views/AddView';
import { AddController } from './Controllers/AddController';
import { EditLogic } from './Models/EditLogic';
import { EditView } from './Views/EditView';
import { EditController } from './Controllers/EditController';
import { DeleteLogic } from './Models/DeleteLogic';
import { DeleteView } from './Views/DeleteView';
import { DeleteController } from './Controllers/DeleteController';

// axios default values
axios.defaults.baseURL = AppConfig.FIREBASE_REQUEST_URL;

var href: String | null = null;
var observer = new MutationObserver(function(mutations) {
  if(href !== location.href) {
    determineScreen();
    href = location.href;
  }
});

observer.observe(document, { childList: true, subtree: true });

function determineScreen() {
  // urlQuery
  const query: string = location.search ;
  const param: string | null = getParam('friend', query);

  switch (param) {
    case 'add':
      const addLogic: AddLogic = new AddLogic();
      const addView: AddView = new AddView(addLogic);
      const addController: AddController = new AddController(addLogic, addView);
      break;

    case 'edit':
      const editLogic: EditLogic = new EditLogic();
      const editView: EditView = new EditView(editLogic);
      const editController: EditController = new EditController(editLogic, editView);
      editController.getListener();
      break;

    case 'delete':
      const deleteLogic: DeleteLogic = new DeleteLogic();
      const deleteView: DeleteView = new DeleteView(deleteLogic);
      const deleteController: DeleteController = new DeleteController(deleteLogic, deleteView);
      break;

    default:
      const listLogic: ListLogic = new ListLogic();
      const listView: ListView = new ListView(listLogic);
      const listController: ListController = new ListController(listLogic, listView);
      listController.getListener();
  }
}


function getParam(keyName: string, query: string) {
  if (!query) query = window.location.href;
  keyName = keyName.replace(/[\[\]]/g, "\\$&");
  let regex = new RegExp("[?&]" + keyName + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(query);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}