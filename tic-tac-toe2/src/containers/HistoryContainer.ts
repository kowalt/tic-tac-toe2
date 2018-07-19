import {connect} from "react-redux";
import {HistoryEventProps, HistoryProps} from "../components/History";
import History from "../components/History";
import { TicTacToeState } from "../reducers/rootReducer";
import {fetchHistory} from "../actions";

function mapStateToProps(state: TicTacToeState) : HistoryProps{
  return{
    history: state.history,
    stepNumber: state.stepIndex
  };
}

function mapDispatchToProps(dispatch: any): HistoryEventProps{
    return{
        onClick(index)
        {
            dispatch(fetchHistory(index));
        }
    };
}

const HistoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(History);

export default HistoryContainer;
