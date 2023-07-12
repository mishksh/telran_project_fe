export const discountRequest = (data, reset) => {

    const url = 'http://localhost:3333/sale/send';

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  
      fetch(url, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Request is failed');
          }
          console.log('Your request has been done');
        })
        .catch((error) => {
          console.error(error);
        });
        reset();
    };
  
  
  
  
  
  
  
  
  