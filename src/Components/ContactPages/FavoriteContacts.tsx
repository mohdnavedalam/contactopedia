import Contact from "./Contact";

const FavoriteContacts = (props: any) => {    
    return (
        <div>
            {
                props.contacts.map((contact: any, index: number) => (
                    <Contact contacts={contact} key={index} />
                ))
            }
        </div>
    );
};

export default FavoriteContacts;