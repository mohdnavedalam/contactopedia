import Contact from '../ContactPages/Contact';

const GeneralContact = (props) => {
    return (
        <div>
            {
                props.contacts.map((contact, index) => (
                    <Contact contact={contact} index={index} />
                ))
            }
        </div>
    );
};

export default GeneralContact;