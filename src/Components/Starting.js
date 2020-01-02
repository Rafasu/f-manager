import React from 'react';
import { connect } from 'react-redux';
import field from "../field.svg"

const Starting = ({starting, clearStarting}) => (
    <section>
        <h2>Starting</h2>
        <div className="field">
            {
                starting.map( p => (
                    <article className="starting" key={p.id}>
                        <div>
                            <img src={p.photo} alt={p.name} />
                            <button onClick={()=>clearStarting(p)}>X</button>
                        </div>
                        <p>{p.name}</p>
                    </article>
                ))
            }
            <img src={field} alt="Football field" />
        </div>
    </section>
);

const mapStateToProps = state =>({
    starting: state.starting
});

const mapDispatchToProps = dispatch =>({
    clearStarting(player){
        dispatch({
            type: 'CLEAR_STARTING',
            player
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Starting);