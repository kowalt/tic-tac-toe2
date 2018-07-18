import {connect} from "react-redux";
import {HistoryProps} from "../components/History";
import { TicTacToeState } from "../reducers/rootReducer";

function mapStateToProps(state: TicTacToeState) : HistoryProps{
  return{
    history: state.history
  };
}

const HistoryContainer = connect(
  mapStateToProps
)(History);

export default HistoryContainer;
