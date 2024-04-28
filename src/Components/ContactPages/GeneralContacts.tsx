import Contact from "./Contact";

const GeneralContacts = (props: any) => {
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

export default GeneralContacts;