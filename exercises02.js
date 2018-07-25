/*Logic Challenge - Naik Angkot
Problem
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]

Code
*/
function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var output = {}

    if (arrPenumpang.length === 0) {
        return arrPenumpang
    } else {
        for (var i = 0; i < arrPenumpang.length; i++) {
            output.penumpang = arrPenumpang[i][0]
            output.naikDari = arrPenumpang[i][1]
            output.tujuan = arrPenumpang[i][2]
            output.bayar = (rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1])) * 2000
            console.log(output)
        }
    }

}

//TEST CASE
naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

naikAngkot([]); //[]