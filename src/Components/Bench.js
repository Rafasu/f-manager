import React from 'react';
import { connect } from 'react-redux';

const Bench = ({bench, clearBench}) => (
    <section>
        <h2>Bench</h2>
        <div className="field">
            {
                bench.map( p => (
                    <article className="bench" key={p.id}>
                        <div>
                            <img src={p.photo} alt={p.name} />
                            <button onClick={()=>clearBench(p)}>X</button>
                        </div>
                        <p>{p.name}</p>
                    </article>
                ))
            }

        </div>
    </section>
);

const mapStateToProps = state =>({
    bench: state.bench
});

const mapDispatchToProps = dispatch =>({
    clearBench(player){
        dispatch({
            type: 'CLEAR_BENCH',
            player
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Bench);