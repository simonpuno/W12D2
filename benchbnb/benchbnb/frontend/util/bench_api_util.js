export const fetchBenchesUtil = (filters) => (
    $.ajax({
        url: '/api/benches',
        method: 'GET',
        data: filters,
        error: (err) => console.log(err)
    })
)