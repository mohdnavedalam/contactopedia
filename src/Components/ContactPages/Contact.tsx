const Contact = (props: any) => {
    return (
        // displaying contacts from state
        <div
            className="row p-md-3 mb-2"
            style={{ borderRadius: "20px", border: "1px solid #555" }}
        >
            <div className="col-2 col-md-1 pt-2 pt-md-1">
                <img
                    src={`https://ui-avatars.com/api/?name=${props.contacts.name}`}
                    style={{ width: "80%" }}
                    alt=""
                />
            </div>
            <div className="col-6 col-md-5 text-warning pt-0">
                <span className="h4">
                    {props.contacts.name}
                </span>
                <br />
                <div className="text-white-50">
                    {props.contacts.email}
                    <br />
                    {props.contacts.phone}
                </div>
            </div>
            <div className="col-2 col-md-2 pt-md-3">
                <button
                    className={`btn btn-sm m-1 ${props.contacts.isFavorite ? "btn-warning" : "btn-outline-warning"}`}
                    onClick={() => props.favoriteClick(props.contacts)}
                >
                    <i
                        className="bi bi-star"
                        style={{ fontSize: "1rem" }}
                    >
                    </i>
                </button>
            </div>
            <div className="col-2 col-md-3 pt-md-3">
                <button className="btn btn-primary btn-sm m-1">
                    <i className="bi bi-pencil-square" style={{fontSize: "1rem"}}></i>
                </button>
                <button className="btn btn-primary btn-sm m-1">
                    <i className="bi bi-trash-fill" style={{fontSize: "1rem"}} onClick={() => props.deleteContact(props.contacts)}></i>
                </button>
            </div>
        </div >
    );
};

export default Contact;