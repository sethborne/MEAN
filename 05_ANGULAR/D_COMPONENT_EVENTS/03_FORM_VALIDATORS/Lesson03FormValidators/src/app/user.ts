export class User {
  constructor(
      public id: number = null,
      public firstName: string = "",
      public lastName: string = "",
      public userName: string = "",
      public email: string = "",
      public password: string = "",
      public createdAt: Date = new Date(),
      public updatedAt: Date = new Date()
  ){}
}
