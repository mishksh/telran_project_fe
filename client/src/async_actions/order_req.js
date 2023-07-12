export const orderRequest = (requestData) => {
    
    return fetch('http://localhost:3333/order/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
        .then(response => {
            if (response.ok) {
                console.log('Request is successful');

            } else {
                console.log('Request is failed');
            }
        })
        .catch(error => {
            console.log('Request error', error);
        });
    };
