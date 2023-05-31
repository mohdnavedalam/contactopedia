import React from "react";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContacts from "./RemoveAllContacts";
import AddContact from "./AddContact";
import FavoriteContact from "./FavoriteContact";
import GeneralContact from "./GeneralContact";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Ben Parker",
          phone: "666-666-7770",
          email: "ben@parker.com",
          isFavorite: false,
        },
        {
          id: 1,
          name: "Kathy Patrick",
          phone: "111-222-0000",
          email: "kathy@patrick.com",
          isFavorite: true,
        },
        {
          id: 1,
          name: "Paul Show",
          phone: "999-222-1111",
          email: "paul@show.com",
          isFavorite: true,
        },
      ],
    };
  }

  render() {
    return (
      <div className="container" style={{ minHeight: "85vh" }}>
        <div className="row py-3">
          <div className="col-4 offset-2">
            <AddRandomContact />
          </div>
          <div className="col-4">
            <RemoveAllContacts />
          </div>
          <div className="row py-2">
            <AddContact />
          </div>
          <div className="row py-2">
            <FavoriteContact
              contacts={this.state.contactList.filter(
                (u) => u.isFavorite == true
              )}
            />
          </div>
          <div className="row py-2">
            <GeneralContact
              contacts={this.state.contactList.filter(
                (u) => u.isFavorite == false
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactIndex;
