import {connect} from 'react-redux';
import Search from './search';
import { fetchBenches } from '../actions/bench_actions';
import {updateFilter} from '../actions/filter_actions';

const mSTP = state => ({
    benches: Object.values(state.entities.benches)
})

const mDTP = dispatch => ({
    fetchBenches: () => dispatch(fetchBenches()),
    updateBounds: bounds => dispatch(updateFilter(bounds))
})

export default connect(mSTP, mDTP)(Search);