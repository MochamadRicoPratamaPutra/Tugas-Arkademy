let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}
let mydata = {
    ...data,
    name: "Mochamad Rico Pratama Putra",
    email: "mricopratamaputra@gmail.com",
    hobby: ['Bermain game', 'Menonton film dan anime', 'Membaca komik', 'Bermain bulutangkis']
}
console.log(mydata)
const {street, city} = mydata.address
const {email} = mydata
console.log(email);
console.log(street + ', ' + city)