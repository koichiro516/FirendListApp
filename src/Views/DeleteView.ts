import { DeleteLogic } from '../Models/DeleteLogic';

export class DeleteView {
  private deleteLogic: DeleteLogic;

  constructor(deleteLogic: DeleteLogic) {
    this.deleteLogic = deleteLogic;
  }

  view() {
    let friendList = this.deleteLogic.users;
    console.log('friendList', friendList);

    var fragment = document.createDocumentFragment();
    const title: HTMLDivElement = document.createElement('div');
    title.textContent = 'おともだちの情報を削除';
    title.className = 'title';
    fragment.appendChild(title);

    const form: HTMLFormElement = document.createElement('form');
    fragment.appendChild(form);

    const p1: HTMLParagraphElement = document.createElement('p');
    form.appendChild(p1);

    const name:	HTMLInputElement = document.createElement('input');
    name.type = 'text';
    name.id = 'name';
    name.className = 'friend-list';
    name.value = `${friendList._fields.name.stringValue}`;
    name.required = true;
    name.disabled = true;
    name.placeholder = 'お名前';
    p1.appendChild(name);

    const p2: HTMLParagraphElement = document.createElement('p');
    form.appendChild(p2);

    const mail:	HTMLInputElement = document.createElement('input');
    mail.type = 'email';
    mail.id = 'mail';
    mail.className = 'friend-list';
    mail.value = `${friendList._fields.mail.stringValue}`;
    mail.required = true;
    mail.disabled = true;
    mail.placeholder = 'メールアドレス';
    p2.appendChild(mail);

    const p3: HTMLParagraphElement = document.createElement('p');
    form.appendChild(p3);

    const birthday:	HTMLInputElement = document.createElement('input');
    birthday.type = 'text';
    birthday.id = 'birthday';
    birthday.className = 'friend-list';
    birthday.value = `${friendList._fields.birthday.stringValue}`;
    birthday.required = true;
    birthday.disabled = true;
    birthday.placeholder = '誕生日；2000/01/13';
    p3.appendChild(birthday);

    const p4: HTMLParagraphElement = document.createElement('p');
    form.appendChild(p4);

    const favorite:	HTMLInputElement = document.createElement('input');
    favorite.type = 'text';
    favorite.id = 'favorite';
    favorite.className = 'friend-list';
    favorite.value = `${friendList._fields.favorite.stringValue}`;
    favorite.required = true;
    favorite.disabled = true;
    favorite.placeholder = '好きなもの';
    p4.appendChild(favorite);

    const p5: HTMLParagraphElement = document.createElement('p');
    form.appendChild(p5);

    const remarks:	HTMLInputElement = document.createElement('input');
    remarks.type = 'text';
    remarks.id = 'remarks';
    remarks.className = 'friend-list';
    remarks.value = `${friendList._fields.remarks.stringValue}`;
    remarks.required = true;
    remarks.disabled = true;
    remarks.placeholder = '備考';
    p5.appendChild(remarks);

    const BtnWrapper: HTMLDivElement = document.createElement('div');
    BtnWrapper.className = 'button-wrapper';
    form.appendChild(BtnWrapper);

    const deleteFriendBtn: HTMLButtonElement = document.createElement('button');
    deleteFriendBtn.id = 'deleteFriendSubmit';
    deleteFriendBtn.type = 'submit';
    deleteFriendBtn.textContent = ' この内容を削除する';
    BtnWrapper.appendChild(deleteFriendBtn);

    const addFriendAnchor: HTMLAnchorElement = document.createElement('a');
    addFriendAnchor.href = location.origin;
    addFriendAnchor.className = 'base-anchor';
    addFriendAnchor.textContent = 'トップへ戻る';
    title.appendChild(addFriendAnchor);

    document.body.appendChild(fragment);
  }
}