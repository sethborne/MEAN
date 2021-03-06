export class User {
  constructor(
    public id: number = null,
    public firstName: string = "",
    public lastName: string = "",
    public email: string = "",
    public password: string = "",
    public passwordConfirmation: string = "",
    public streetAddress: string = "",
    public unitOrAptNumber: string = "",
    public cityName: string = "",
    public stateName: string = "",
    public feeling: string = "",
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date()
  ){}
}
