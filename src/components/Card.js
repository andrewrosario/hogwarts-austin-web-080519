import React, { Component } from 'react';


class Card extends Component {
    state = { 
        showDetails: false
     }

    slugify = (name) => {
        let splitName = name.split(' ')
        return splitName.join("_")
    }

    handleClick = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }


    render() { 
        const {name, weight, specialty, greased} = this.props.hog
        
        return ( 
            <div onClick={this.handleClick} className='hog-card'>
                <h3>{name}</h3>
                <img alt='pig' src={require(`../hog-imgs/${this.slugify(name.toLowerCase())}.jpg`)}  ></img>
                <br></br>
                {this.state.showDetails &&
                <div className="hog-details">
                    Weight: {weight}
                    <br></br>
                    Specialty: {specialty}
                    <br></br>
                    Highest Medal Achieved: {this.props.hog['highest medal achieved']}  
                    <br></br>
                </div>
                }
                <br></br>

            </div>
         );
    }
}
 
export default Card;