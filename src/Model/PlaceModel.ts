export class YelpModel{
    place_icon : string
    id : string
    place_name : string
    place_photo : string
    place_id : string
    place_reviews : string
    place_type : any[]
    place_vicinity : string
    place_address : string
    place_rating : string
    place_price : string
    place_category : any[]
    place_city : string
    place_url : string
    place_time : string

    constructor()
    {
        this.place_icon = ""
        this.id = ""
        this.place_name = ""
        this.place_photo = ""
        this.place_id = ""
        this.place_reviews = ""
        this.place_type = []
        this.place_vicinity = ""
        this.place_address = ""
        this.place_rating = ""
        this.place_price = ""
        this.place_category = []
        this.place_city = ""
        this.place_url = ""
        this.place_time = ""
    }
}

export class GrouponModel{

    place_id : string
    place_name : string
    place_title : string
    place_redelocation : string
    place_discount_price : string
    place_price : string
    place_photo : string
    place_lati : string
    place_longti : string
    place_dealurl : string

    constructor()
    {
        this.place_id = ""
        this.place_name = ""
        this.place_title = ""
        this.place_redelocation = ""
        this.place_discount_price = ""
        this.place_price = ""
        this.place_photo = ""
        this.place_dealurl = ""
    }
}