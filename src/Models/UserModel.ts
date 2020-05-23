export class UserModel {
  _originalName: string | null;
  _collectionId!: string;
  _fields: {
    name: {
      stringValue: string
    },
    mail: {
      stringValue: string
    },
    birthday: {
      stringValue: string
    },
    favorite: {
      stringValue: string
    },
    remarks: {
      stringValue: string
    }
  };

  constructor(originalName: string | null,
    fieldName: string,
    fieldMail: string,
    fieldBirthday: string,
    fieldFavorite: string,
    fieldRemarks: string
  ) {
    this._originalName = originalName;
    this._fields = {
      name: {
        stringValue: fieldName
      },
      mail: {
        stringValue: fieldMail
      },
      birthday: {
        stringValue: fieldBirthday
      },
      favorite: {
        stringValue: fieldFavorite
      },
      remarks: {
        stringValue: fieldRemarks
      }
    }
    if(this._originalName) {
      this._collectionId = this._originalName.replace(new RegExp('¥*(.*)/'), '');
    }
  }

  set originalName(originalName: string) {
    this._originalName = originalName;
  }

  set fieldsName(fieldName: string) {
    this._fields.name.stringValue = fieldName;
  }

  set fieldsMail(fieldMail: string) {
    this._fields.mail.stringValue = fieldMail;
  }

  set fieldsBirthday(fieldBirthday: string) {
    this._fields.birthday.stringValue = fieldBirthday;
  }

  set fieldsFavorite(fieldFavorite: string) {
    this._fields.favorite.stringValue = fieldFavorite;
  }

  set fieldsRemarks(fieldRemarks: string) {
    this._fields.remarks.stringValue = fieldRemarks;
  }

  get fields(): object{
    return this._fields;
  }
}