import PropTypes from 'prop-types';

const Collapse = (props) => {
    return (
        <div>
            <div>
                <a className="btn btn-primary w-100" data-bs-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls={props.href}>
                    Link with href
                </a>
                <div className="collapse show" id={props.href}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

Collapse.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
};


export default Collapse
