const Contact = (props: any) => {
    return (
        // displaying contacts from state
        <div>            
            <button className="btn btn-secondary form-control">
                {props.contacts.name}   
            </button>
        </div>
    );
};

export default Contact;