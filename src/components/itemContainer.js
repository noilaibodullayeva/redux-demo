import React from 'react'
import { connect } from 'react-redux'
import buyCake from '../redux/cakes/CakeAction'
import buyIceCream from '../redux/cakes/icecream/iceCreamActions'

function ItemContainer(props) {
    return (
        <div>
            <h2>item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy item</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake
        ? state.cake.numOfCakes
        : state.iceCream.numOfIceCream

    return {
        item: itemState
    }
}

const mapDispatchtoprops = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
        ? () => dispatch(buyCake())
        : () => dispatch(buyIceCream())

    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchtoprops)(ItemContainer)
