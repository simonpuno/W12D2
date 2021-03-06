import { fetchBenchesUtil } from "../util/bench_api_util";
export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

const receiveBenches = (benches) => ({
    type: RECEIVE_BENCHES,
    benches: benches
})

export const fetchBenches = (filters) => dispatch => (
    fetchBenchesUtil(filters)
        .then(benches => dispatch(receiveBenches(benches)))
)