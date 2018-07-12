import {connect} from "react-redux";
import {default as Square, SquareEventProps, SquareProps} from "../components/Square";
import {TicTacToeState} from "../reducers/rootReducer";
import {checkSquare} from "../actions";

function mapStateToProps(state: TicTacToeState): SquareProps  {

    return {
        content: state.history[state.stepIndex].squares[0].content;
    }
}

function mapDispatchToProps(dispatch: any): SquareEventProps {
    return{
        onClick(index)
        {
            dispatch(checkSquare(index));
        }
    }
}

const SquareContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Square)

export default SquareContainer;