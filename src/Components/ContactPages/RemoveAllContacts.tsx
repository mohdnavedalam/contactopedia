const RemoveAllContacts = (props: any) => {
    return (
        <div>
            <button className="btn btn-danger form-control" onClick={()=>props.handleRemoveAll()}>Remove All</button>
        </div>
    );
};

export default RemoveAllContacts;
