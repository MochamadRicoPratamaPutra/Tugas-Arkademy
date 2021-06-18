let Matematika = 1000
let bahasaIndonesia = 90
let bahasaInggris = 80
let IPA = 69
let salah = 0
if (typeof(Matematika) != 'number') {
    salah = salah + 1;
    console.log('Error, mohon isi nilai Matematika dengan benar');
}
if (typeof(bahasaIndonesia) != 'number') {
    salah = salah + 1;
    console.log('Error, mohon isi nilai Bahasa Indonesia dengan benar');
}
if (typeof(bahasaInggris) != 'number') {
    salah = salah + 1;
    console.log('Error, mohon isi nilai Bahasa Inggris dengan benar');
}
if (typeof(IPA) != 'number') {
    salah = salah + 1;
    console.log('Error, mohon isi nilai IPA dengan benar');
}
if (salah == 0) {
    let average = (Matematika + bahasaIndonesia + bahasaInggris + IPA)/4;
    console.log('Rata-rata ' + average);
    if (average>=90 && average<=100) {
        console.log('A');
    }else if (average>=80 && average<=89) {
        console.log('B');
    }else if (average>=70 && average<=79) {
        console.log('C');
    }else if (average>=60 && average<=69) {
        console.log('D');
    }else if (average>=0 && average<=59) {
        console.log('E');
    }else {
        console.log('Terdapat data yang tidak benar, mohon diisi ulang')
    }
}else{
    console.log('Error, mohon isi semua nilai pelajaran');
}