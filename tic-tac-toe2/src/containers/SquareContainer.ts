import {connect} from "react-redux";
import {default as Square, SquareEventProps, SquareProps} from "../components/Square";
import {TicTacToeState} from "../reducers/rootReducer";
import {checkSquare} from "../actions";

function mapStateToProps(state: TicTacToeState, ownProps: any): SquareProps  {

    return {
        content: state.history[state.stepIndex].squares[ownProps.index],
    }
}

function mapDispatchToProps(dispatch: any, ownProps: any): SquareEventProps {
    return{
        onClick()
        {
            dispatch(checkSquare(ownProps.index));
        }
    }
}

const SquareContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Square)

export default SquareContainer;
