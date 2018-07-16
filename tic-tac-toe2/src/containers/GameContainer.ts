import {connect} from "react-redux";
import {TicTacToeState} from "../reducers/rootReducer";
import {default as Game, GameProps} from "../components/Game";

function mapStateToProps(state: TicTacToeState): GameProps
{
    return {
        winner: state.winner
    };
}

const GameContainer = connect(mapStateToProps)(Game);

export default GameContainer;