const reqURL = 'https://datainlife.ru/junior_task/get_products.php';
const sndURL = 'https://datainlife.ru/junior_task/add_basket.php';

export function GetRequest(){
    const _arr=[];

        fetch(reqURL,{mode:'cors'})
        .then(response=>response.json())
        .then(_json=> _arr.push(_json))
        .catch(error => console.error(error))

    return _arr
}

export function SndReqest(obj){
    let formData = new FormData();
    for (let key in obj){
        if(obj[key]){
            formData.append('product['+key+']', obj[key])
        }
    }

    fetch(sndURL, {
        method: 'POST',
        body:formData,
      }).then(res => res.json())
      .then(response => console.log('Успех:', JSON.stringify(response)))
      .catch(error => console.error('Ошибка:', error));
}