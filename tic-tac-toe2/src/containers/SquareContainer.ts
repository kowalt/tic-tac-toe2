import {connect} from "react-redux";
import {default as Square, SquareEventProps, SquareProps} from "../components/Square";
import {TicTacToeState} from "../reducers/rootReducer";
import {checkSquare} from "../actions";

function mapStateToProps(state: TicTacToeState, ownProps: any): SquareProps  {
    console.log(state.history[state.stepIndex].squares[ownProps.index]);
    return {
        content: state.history[state.stepIndex].squares[ownProps.index],
        index: ownProps.index
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
)(Square);

export default SquareContainer;
