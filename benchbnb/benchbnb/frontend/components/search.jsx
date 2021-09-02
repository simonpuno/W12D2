import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';

const Search = (props) => {
    return (
        <div>
            <BenchMap benches={props.benches} updateBounds={props.updateBounds}/>
            <BenchIndex benches={props.benches} fetchBenches={props.fetchBenches}/>
        </div>
    )
}

export default Search;