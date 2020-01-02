// Place where data is stored
import { createStore } from 'redux';


const initialState = {
    players: [{
        id: 1, 
        name: 'Marcelo', 
        photo: ''
    },
    {
        id: 2, 
        name: 'Cristiano Ronaldo', 
        photo: ''
    },
    {
        id: 3, 
        name: 'Thiago Silva', 
        photo: ''
    },
    {
        id: 4, 
        name: 'Kaka', 
        photo: ''
    }

    ],
    starting: [],
    bench: []
};

const reducerTrainer = (state = initialState, action) => {
    if(action.type === 'ADD_STARTING'){
        return{
            ...state,
            starting: state.starting.concat(action.player),
            players: state.players.filter(p => p.id !== action.player.id )
        }
    }else if(action.type === 'ADD_BENCH'){
        return{
            ...state,
            bench: state.bench.concat(action.player),
            players: state.players.filter(p => p.id !== action.player.id )
        }
    }
    else if(action.type === 'CLEAR_STARTING'){
        return{
            ...state,
            players: state.players.concat(action.player),
            starting: state.starting.filter(p => p.id !== action.player.id )
        }
    }
    else if(action.type === 'CLEAR_BENCH'){
        return{
            ...state,
            players: state.players.concat(action.player),
            bench: state.bench.filter(p => p.id !== action.player.id )
        }
    }

    console.log(action);
    return state;
};


export default createStore(reducerTrainer);