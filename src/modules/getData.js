const getData = () => {
    return fetch('https://test-2741f-default-rtdb.firebaseio.com//goods.json')
        .then((response) => {
            return response.json()
        })
}

export default getData