export class ContactModel {
  displayName : string
  phoneNumbers : string
  image : string
  isInvited : boolean
  isHasApp : boolean
  isContact : boolean
  isAdded : string
  id : string

  // checkbox is checked or not
  isChecked :  boolean

  constructor(){
      this.displayName = ""
      this.phoneNumbers = ""
      this.image = ""
      this.isInvited = false
      this.isHasApp = false
      this.isContact = true
      this.isAdded = ""
      this.id = ""
      this.isChecked = false
  }

}
