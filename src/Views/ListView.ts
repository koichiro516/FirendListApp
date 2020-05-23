import { ListLogic } from '../Models/ListLogic';

export class ListView {
  private listLogic: ListLogic;

  constructor(listLogic: ListLogic) {
    this.listLogic = listLogic;
  }

  view(): void {
    let friendList = this.listLogic.users;
    console.log('friendList', friendList);

    var fragment = document.createDocumentFragment();

    const title: HTMLDivElement = document.createElement('div');
    title.className = 'title';
    title.textContent = 'おともだちリスト';
    fragment.appendChild(title);

    const addFriendAnchor: HTMLAnchorElement = document.createElement('a');
    addFriendAnchor.href = '?friend=add';
    addFriendAnchor.className = 'base-anchor';
    addFriendAnchor.textContent = '＋';
    title.appendChild(addFriendAnchor);

    const friendListTable: HTMLTableElement = document.createElement('table');
    friendListTable.id = 'friendListTable';
    if(!document.getElementById('friendListTable')) {
      fragment.appendChild(friendListTable)
    }

    const trHeader:	HTMLTableRowElement = document.createElement('tr');
    friendListTable.appendChild(trHeader);

    const thName: HTMLTableHeaderCellElement = document.createElement('th');
    thName.innerText = '名前';
    thName.className = 'column';
    thName.align = 'left';
    trHeader.appendChild(thName);

    const thMail: HTMLTableHeaderCellElement = document.createElement('th');
    thMail.innerText = 'メールアドレス';
    thMail.className = 'column';
    thMail.align = 'left';
    trHeader.appendChild(thMail);

    const thBirthday: HTMLTableHeaderCellElement = document.createElement('th');
    thBirthday.innerText = '誕生日';
    thBirthday.className = 'column';
    thBirthday.align = 'left';
    trHeader.appendChild(thBirthday);

    const thFavorite: HTMLTableHeaderCellElement = document.createElement('th');
    thFavorite.innerText = '好きなもの';
    thFavorite.className = 'column';
    thFavorite.align = 'left';
    trHeader.appendChild(thFavorite);

    const thRemarks: HTMLTableHeaderCellElement = document.createElement('th');
    thRemarks.innerText = '備考';
    thRemarks.className = 'column';
    thRemarks.align = 'left';
    trHeader.appendChild(thRemarks);

    const thEdit: HTMLTableHeaderCellElement = document.createElement('th');
    trHeader.appendChild(thEdit);

    const thDelete: HTMLTableHeaderCellElement = document.createElement('th');
    trHeader.appendChild(thDelete);

    // おともだちリスト表示
    friendList.forEach((item: any, index: number) => {
      const trData:	HTMLTableRowElement = document.createElement('tr');
      friendListTable.appendChild(trData);

      const tdName: HTMLTableHeaderCellElement = document.createElement('td');
      tdName.innerText = friendList[index]._fields.name.stringValue;
      trData.appendChild(tdName);

      const tdMail: HTMLTableDataCellElement = document.createElement('td');
      tdMail.innerText = friendList[index]._fields.mail.stringValue;
      trData.appendChild(tdMail);

      const tdBirthday: HTMLTableDataCellElement = document.createElement('td');
      tdBirthday.innerText = friendList[index]._fields.birthday.stringValue;
      trData.appendChild(tdBirthday);

      const tdFavorite: HTMLTableDataCellElement = document.createElement('td');
      tdFavorite.innerText = friendList[index]._fields.favorite.stringValue;
      trData.appendChild(tdFavorite);

      const tdRemarks: HTMLTableDataCellElement = document.createElement('td');
      tdRemarks.innerText = friendList[index]._fields.remarks.stringValue;
      trData.appendChild(tdRemarks);

      const editAnchor: HTMLAnchorElement = document.createElement('a');
      editAnchor.href = `?friend=edit&id=${friendList[index]._collectionId}`;
      editAnchor.className = 'base-anchor';
      editAnchor.textContent = '編集';
      trData.appendChild(editAnchor);

      const deleteAnchor: HTMLAnchorElement = document.createElement('a');
      deleteAnchor.href = `?friend=delete&id=${friendList[index]._collectionId}`;
      deleteAnchor.className = 'base-anchor';
      deleteAnchor.textContent = '削除';
      trData.appendChild(deleteAnchor);
    });

    document.body.appendChild(fragment);
  }
}