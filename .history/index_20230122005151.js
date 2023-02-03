//BT1: Tính tiền lương nhân viên
function inputSoNgayLam () {
    //input: 
    var soNgayLam = document.getElementById('soNgayLam').value;
    const luongMotNgay = 100000;

    //output: 
    var result = 0;

    //progress
    var result = parseInt(soNgayLam) * parseInt(luongMotNgay);

    document.getElementById('result').value = result.toLocaleString() + ' VND';
}

//BT2: Tính trung bình cộng 5 số
function average () {
    //input:
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var n3 = document.getElementById('n3').value;
    var n4 = document.getElementById('n4').value;
    var n5 = document.getElementById('n5').value;
    //output:
    var average = 0;
    const soLuongInput = 5;

    //progress
    var sum = parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) + parseFloat(n5);
    
    var average =  sum / parseFloat(soLuongInput) ;
    
    document.getElementById('average').value = average;
}

//BT3: Quy đổi tiền
function tradeMoney () {
    //input
    var inputUsd = document.getElementById('inputUsd').value;
    const tyGia = 23500;

    //output
    var tradeMoney = 0;

    //progress
    var tradeMoney = parseInt(inputUsd) * parseInt(tyGia);
    document.getElementById('tradeMoney').value = tradeMoney.toLocaleString() + ' VND';
}

//BT4: Tính chu vi & diện tích hình chữ nhật
function chuVi () {
    // input
    var length = document.getElementById('length').value;
    var width = document.getElementById('width').value;
    
    //output
    var chuVi = ( parseInt(length) + parseInt(width) ) * 2;

    //progress
    document.getElementById('chuVi').value = chuVi.toLocaleString(); 
}


function dienTich () {
    // input
    var length = document.getElementById('length').value;
    var width = document.getElementById('width').value;
    
    //output
    var dienTich = parseInt(length) * parseInt(width) ;

    //progress
    document.getElementById('dienTich').value = dienTich.toLocaleString(); 
}


//BT5: Tính tổng hai ký số
function tong2KySo () {
    //input
    var inputSoChuc = document.getElementById('inputSoChuc').value;
    var hangChuc = 0; 
    var hangDonVi = 0;

    //output
    var tong2KySo = 0;

    //progress
    var hangChuc = Math.floor(Number(inputSoChuc)/10)
    var hangDonVi = Math.floor(Number(inputSoChuc)%10)
    var tong2KySo = parseInt(hangChuc) + parseInt(hangDonVi);

    document.getElementById('tong2KySo').value = tong2KySo;
}
/*
Link vercel: 
https://tran-huu-phuoc-bc-43-bt-js-buoi1.vercel.app/
*/