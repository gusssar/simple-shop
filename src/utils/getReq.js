const reqURL = 'https://datainlife.ru/junior_task/get_products.php';

export function GetRequest(){
    const _arr=[];

        fetch(reqURL,{mode:'cors'})
        .then(response=>response.json())
        .then(_json=> _arr.push(_json))
        .catch(error => console.error(error))

    return _arr
}