import React from 'react'
import { connect } from 'react-redux'
import buyIceCream from '../redux/cakes/icecream/iceCreamActions'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of icecream - {props.numOfIceCream} </h2>
            <button onClick={props.buyCake}>Buy icecream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps )
(IceCreamContainer)
