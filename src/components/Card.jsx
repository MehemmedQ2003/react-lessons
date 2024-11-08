import PropTypes from 'prop-types';
import React from 'react';

class Card extends React.Component{
    render(){
        return (
            <div className='my-2'>
                <div className="card w-100">
                    <img className='img-fluid' src={this.props.image}/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.text}</p>
                        <a href="#" className="btn btn-primary">{this.props.button}</a>
                    </div>
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

Card.defaultProps = {
    title: "Default Props title"
}

export default Card
