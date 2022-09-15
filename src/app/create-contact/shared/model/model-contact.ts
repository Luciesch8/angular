const contact = {
    listContact : [
        {
            titre: "User Id",
            column: "userId",
            value: "userId"
        },
        {
            titre: "ID",
            column: "id",
            value: "id"
        },
        {
            titre: "Title",
            column: "title",
            value: "title"
        },
        {
            titre: "Corps",
            column: "body",
            value: "body"
        }
    ]
}

export class ModelContact {

    public getContactModel(){
        return contact;
    }
}
