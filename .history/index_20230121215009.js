//BT1: Tính tiền lương nhân viên
function inputSoNgayLam () {
    //input
    var soNgayLam = document.getElementById('soNgayLam').value;
    var luongMotNgay = 100000;
    //output
    var result = 0;

    var result = parseInt(soNgayLam) * parseInt(luongMotNgay);

    document.getElementById('result').value = result + 'VND';
}

//BT2: Tính trung bình cộng 5 số
function average () {
    //input
    var n1 = document.getElementById('n1');
    var n2 = document.getElementById('n2');
    var n3 = document.getElementById('n3');
    var n4 = document.getElementById('n4');
    var n5 = document.getElementById('n5');
    //output
    var average = 0;

    // var average = ( parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) + parseFloat(n5)) / 5 ;
    var sum = parseFloat(n1+n2+n3+n4+n5)
    var average =  sum / 5 ;
    
    document.getElementById('average').value = average;
}

/*
Link vercel: 
https://tran-huu-phuoc-bc-43-bt-js-buoi1.vercel.app/
*/