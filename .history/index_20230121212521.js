
function inputSoNgayLam () {
    //input
    var soNgayLam = document.getElementById('soNgayLam').value;
    var luongMotNgay = 100000;
    //output
    var result = 0;

    var result = parseInt(soNgayLam) * parseInt(luongMotNgay);

    document.getElementById('result').value = result + 'VND';
}



/*
Link vercel: 
https://tran-huu-phuoc-bc-43-bt-js-buoi1.vercel.app/
*/