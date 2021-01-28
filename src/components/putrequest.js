import React from "react";
import axios from 'axios';

export default function putrequest(id, barcode, label3, label40) {
axios({
    method: 'put',
    url: 'http://omega.yunli-wuli.com:9191/V2/good',
   // headers: {Authorization: 'Bearer' + token },
    data: {

        "goods": [
        {

            "id": "123",
            "barcode": "123",
            "label3": "123",
            "label40": id,				
            "label44": barcode,	
            "label47": label3,
            "label48": label40,

        }
        ],
        "storeUuid": "65"
    } 
})
.then(response => {
   // res.statusCode = 200
    console.log(response)
 //   res.setHeader('Content-Type', 'application/json')
   // res.send(JSON.stringify(response.data, null,3))
})
.catch( error => {
console.error(error)
})

}
