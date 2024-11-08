import PropTypes from 'prop-types';

const Card = (props) => {
    return (
        <div className="">
            <div className="card" style={{width: "18rem"}}>
                <img className='img-fluid' src={props.image}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">{props.button}</a>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default Card
