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
            isUpdating: true,
            selectedContact: undefined,
        }
    }

    handleAddContact = (newContact: any) => {
        if (newContact.name == "") {
            return { status: "failure", msg: "Please enter a valid Name" };
        } else if (newContact.phone == "") {
            return { status: "failure", msg: "Please enter a valid Phone number" };
        }
        const duplicateContact = this.state.contactList.filter((x: any) => {
            if (x.name == newContact.name || x.phone == newContact.phone) {
                return true;
            }
        });
        if (duplicateContact.length > 0) {
            return { status: "failure", msg: "Contact already exists" };
        } else {
            const newFinalContact = {
                ...newContact,
                id: this.state.contactList[this.state.contactList.length - 1].id + 1,
                //id: this.state.contactList.length == 0 ? 1 : this.state.contactList[this.state.contactList.length - 1].id,
                isFavorite: false
            };
            this.setState((prevState: any) => {
                return {
                    contactList: prevState.contactList.concat([newFinalContact])
                };
            });
            return { status: "success", msg: "Contact added successfully" };
        }
    };

    handleToggleFavorites = (contact: any) => {
        this.setState((prevState: any) => {
            return {
                contactList: prevState.contactList.map((x: any) => {
                    if (x.id == contact.id) {
                        return { ...x, isFavorite: !x.isFavorite };
                    }
                    return x;
                }),
            };
        });
    };

    handleDeleteContact = (contact: any) => {
        this.setState((prevState: any) => {
            return {
                contactList: prevState.contactList.filter((x: any) => {
                    return x.id !== contact.id;
                }),
            };
        });
    };

    handleAddRandomContact = (newContact: any) => {
        const newFinalContact = {
            ...newContact,
            id: this.state.contactList[this.state.contactList.length - 1].id + 1,
            //id: this.state.contactList.length == 0 ? 1 : this.state.contactList[this.state.contactList.length - 1].id,
            isFavorite: false,
        };
        this.setState((prevState: any) => {
            return {
                contactList: prevState.contactList.concat([newFinalContact]),
            };
        });
    };

    handleRemoveAll = () => {
        this.setState(() => {
            return {
                contactList: [],
            };
        });
    };

    handleUpdateContact = (contact: any) => {
        console.log(contact);
        this.setState((prevState: any) => {
            return {
                selectedContact: contact,
                isUpdating: true,
            };
        });
    };

    render() {
        return (
            <div>
                <div className="container" style={{ minHeight: "85vh" }}>
                    <div className="row py-3">
                        <div className="col-4 offset-2 row">
                            <AddRandomContact handleAddRandomContact={this.handleAddRandomContact} />
                        </div>
                        <div className="col-4 row">
                            <RemoveAllContacts handleRemoveAll={this.handleRemoveAll} />
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <AddContact handleAddContact={this.handleAddContact} />
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <FavoriteContacts
                                    contacts={this.state.contactList.filter((u: any) => u.isFavorite === true)}  // sending contacts from state
                                    favoriteClick={this.handleToggleFavorites}
                                    deleteContact={this.handleDeleteContact}
                                    handleUpdateContact={this.handleUpdateContact}
                                />
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <GeneralContacts
                                    contacts={this.state.contactList.filter((u: any) => u.isFavorite === false)}
                                    favoriteClick={this.handleToggleFavorites}
                                    deleteContact={this.handleDeleteContact}
                                    handleUpdateContact={this.handleUpdateContact}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactIndex;