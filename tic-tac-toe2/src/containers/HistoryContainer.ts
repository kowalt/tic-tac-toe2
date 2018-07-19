import {connect} from "react-redux";
import {HistoryEventProps, HistoryProps} from "../components/History";
import History from "../components/History";
import { TicTacToeState } from "../reducers/rootReducer";
import {fetchHistory} from "../actions";

function mapStateToProps(state: TicTacToeState) : HistoryProps{
  return{
    history: state.history
  };
}

function mapDispatchToProps(dispatch: any, ownProps: any): HistoryEventProps{
    return{
        onClick()
        {
            dispatch(fetchHistory(ownProps.index));
        }
    };
}

const HistoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(History);

export default HistoryContainer;
