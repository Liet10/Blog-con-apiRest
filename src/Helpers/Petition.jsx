
export const Petition = async (url, method, dataToStorage, files = false)=>{
    
    let loading = true
       
        let options = {
            method: 'GET'
        }
        if(method == 'GET' || method == 'DELETE'){
            options = {
                method: method
            }
        }
        if (method === 'POST' || method === 'PUT') {
            let body;
            if (files) {
            options = {
                method: method,
                body: dataToStorage
            } 
              } else {            
            options = {
                    method: method,
                    body: JSON.stringify(dataToStorage),
                    headers: {
                        'Content-Type': 'application/json',
                      },
                    };
               }
          }
       const peticion = await fetch(url, options)
       const data = await peticion.json()

        loading = false
            return {
                data,
                loading
            }
        }
   