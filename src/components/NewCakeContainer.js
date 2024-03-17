import React, {useState} from 'react'
import { connect, useSelector,  } from 'react-redux'
import buyCake from '../redux/cakes/CakeAction'

function NewCakeContainer(props) {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)

    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of cakes - {numOfCakes} </h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={()=>props.buyCake(number)}>Buy {number} cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfcakes: state.cake.numOfcakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(NewCakeContainer)
