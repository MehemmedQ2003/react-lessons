const Collapse = (props) => {
    return (
        <div>
            <div>
                <a className="btn btn-primary" data-bs-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls={props.href}>
                    Link with href
                </a>
                <div className="collapse" id={props.href}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Collapse
