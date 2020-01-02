import React from 'react';
import { connect } from 'react-redux';

const Players = ( {players, addStarting, addBench} ) => (
    <section>
        <h2>Players</h2>
        <div className="container-player">
            {
                players.map( p => (
                    <article className="player" key={p.id}>
                        <img src={p.photo} alt={p.name}/>
                        <h3>{p.name}</h3>
                        <div>
                            <button onClick={() => addStarting(p)}>Starting</button>
                            <button onClick={() => addBench(p)}>Bench</button>
                        </div>
                    </article>
                    )
                )
            }   
        </div>
    </section>
);

const mapStatetoProps = state => ({
    players: state.players,
});

const mapDispatchToProps = dispatch =>({
    addStarting(player){
        dispatch({
            type: 'ADD_STARTING',
            player
        })
    },
    addBench(player){
        dispatch({
            type: 'ADD_BENCH',
            player
        })
    },

});

export default connect(mapStatetoProps, mapDispatchToProps)(Players);