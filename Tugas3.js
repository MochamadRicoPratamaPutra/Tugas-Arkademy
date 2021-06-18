const printSegitiga = 10
let tipe = typeof(printSegitiga)
if (tipe != 'number' || printSegitiga <=0) {
    console.log('Data harus number dan tidak boleh lebih dari sama dengan nol')
}else{
    for (let i = printSegitiga; i > 0; i--) {
        let segitiga = ''
        for (let j = 1; j <= i; j++) {
            segitiga = segitiga + j
        }
        console.log(segitiga)
    }
}