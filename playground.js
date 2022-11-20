// const add = (sum, callback) => {
//     setTimeout(() => {
//         callback(1 + 2)
//     }, 2000)
// }

// add(1, (data) => {
//     console.log(data)
// });

// Object property shorthand
// const name = "Pankaj"
// const userAge = 30

// const user = {
//     name,
//     age: userAge,
//     location: 'Punjab'
// }

// console.log(user)

// Object Destructuring

// const product = {
//     label: "Red notebook",
//     price: 2000,
//     stock: 43,
//     salePrice: undefined
// }

// const { label: productLabel, price, stock } = product

// const transaction = (type, { label, stick }) => {
//     console.log(stock, label)
// }

// transaction('order', product)

const http = require('http')
const { resolve } = require('path')

const url = 'http://api.weatherstack.com/current?access_key=79e58311ad7862c40898e58b12d37df8&query=40,-75&units=f'

const request = http.request(url, (response) => {
    let data = '';
    
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (err) => {
    console.log(err)
})

request.end()

