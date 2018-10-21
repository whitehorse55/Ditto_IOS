export class ChatModel{
 
    username : string
    userid :  string
    useremail : string
    userimage : string
    userplace_name : string
    userplace_id : string
    userplace_number : number
    userplace_image : string
    userstatus : boolean
    userplaces : Array<any>
    ismeetingdatay : boolean
    ismeetingdate : string
    ismeetingKey : string
    lastmessage : string

    userplace_price : string
    userplace_discountprice : string
    userplace_dealurl : string
    groupid : string

    constructor()
    {
        this.username = ""
        this.username = ""
        this.userplace_name = ""
        this.useremail = ""
        this.userid = ""
        this.userplace_id = ""
        this.userplace_number = 0
        this.userplaces = []
        this.ismeetingdatay = false
        this.ismeetingdate = ""
        this.ismeetingKey = ""
        this.userplace_image=""
        this.userstatus = false
        this.lastmessage = ""
        this.userplace_price = ""
        this.userplace_discountprice  = ""
        this.userplace_dealurl = ""
        this.groupid = ""
    }
}


export class ChattingModel{
    sender : string
    receiver : string
    message : string
    timeofmsg : string
    dateofmsg : string
    timestamp : string
    isme : boolean

    constructor()
    {
        this.sender = ""
        this.receiver = ""
        this.message = ""
        this.timeofmsg = ""
        this.dateofmsg = ""
        this.timestamp = ""
        this.isme = true
    }
}

export class GroupChatModel
{
    key : string
    dateofmsg : string
    message : string
    photo : string
    placename : string
    receiver : string
    sender : string
    timeofmsg : string
    timestamp : string
    type : string
    
    acceptUsers : any
    isAccept : boolean

    constructor()
    {
        this.key = ""
        this.dateofmsg = ""
        this.message = ""
        this.photo = ""
        this.receiver = ""
        this.sender = ""
        this.timeofmsg = ""
        this.timestamp = ""
        this.type = ""
        this.placename = ""
        this.acceptUsers = []
        this.isAccept = false
    }
}