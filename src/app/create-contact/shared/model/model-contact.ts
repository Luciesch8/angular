const contact = {
    listContact2 : [
        {
            titre: "Nom",
            column: "nom",
            value: "nom"
        },
        {
            titre: "Prenom",
            column: "prenom",
            value: "prenom"
        },
        {
            titre: "Adresse",
            column: "adresse",
            value: "adresse"
        },
        {
            titre: "Email",
            column: "email",
            value: "email"
        },
        {
            titre: "Tel",
            column: "tel",
            value: "tel"
        }
    ],

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
