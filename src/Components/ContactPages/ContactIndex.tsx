import React from "react";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContacts from "./RemoveAllContacts";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";

class ContactIndex extends React.Component<any, any> {
    constructor(props: {}) {
        super(props);
        this.state = {
            contactList: [
                {
                    id: 1,
                    name: "Ben Parker",
                    phone: "666-666-7770",
                    email: "ben@dotnetmastery.com",
                    isFavorite: false,
                },
                {
                    id: 2,
                    name: "Kathy Patrick",
                    phone: "999-222-1111",
                    email: "kathy@dotnetmastery.com",
                    isFavorite: true,
                },
                {
                    id: 3,
                    name: "Paul Show",
                    phone: "111-222-0000",
                    email: "paul@dotnetmastery.com",
                    isFavorite: true,
                },
            ],
        }
    }
    render() {
        return (
            <div>
                <div className="container" style={{ minHeight: "85vh" }}>
                    <div className="row py-3">
                        <div className="col-4 offset-2">
                            <AddRandomContact/>
                        </div>
                        <div className="col-4">
                            <RemoveAllContacts />
                        </div>
                        <div className="row py-2">
                            <AddContact />
                        </div>
                        <div className="row py-2">
                            <FavoriteContacts
                                contacts={this.state.contactList.filter((u: any) => u.isFavorite == true)}  // sending contacts from state
                            />
                        </div>
                        <div className="row py-2">
                            <GeneralContacts />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactIndex;