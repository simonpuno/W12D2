import React from 'react';
import BenchIndexItem from './bench_index_item'

class BenchIndex extends React.Component {

    componentDidMount(){
        // this.props.fetchBenches();
    }

    render(){
        if (this.props.benches.length === 0) return null;
        const benchLis = this.props.benches.map(bench => {
            return <BenchIndexItem key={bench.id}bench={bench}/>
        })
        return (
            <div>
                <ul>{benchLis}</ul>
            </div>
        )
    }
}

export default BenchIndex;