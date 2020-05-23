interface IApiCall {
  getUser(): any;
  getUserByCollectionId(collectionId: string): any;
  registerUser(postData: object): any;
  editUserByCollectionId(postData: object): any;
  deleteUserByCollectionId(collectionId: string): any;
}