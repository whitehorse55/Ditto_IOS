export class User{

  email : string
  username : string
  phonenumber : string
  id : string
  countrycode : string
  photoUrl : string
  firstlogin : boolean
  isSwipeRight : boolean

  // isAccept : boolean

  constructor()
  {
      this.email = ""
      this.username = ""
      this.phonenumber= ""
      this.id = ""
      this.countrycode = ""
      this.photoUrl = ""
      this.firstlogin = false
      this.isSwipeRight = false
  
      // this.isAccept = false
  }
}
