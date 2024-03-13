import React from 'react'
import { connect } from 'react-redux'
import buyCake from '../redux/cakes/CakeAction'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfcakes} </h2>
            <button onClick={props.buyCake}>Buy a cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfcakes: state.numOfcakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(CakeContainer)
