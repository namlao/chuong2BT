function diemSV() {
let vatLy = parseInt(prompt("Điểm vật lý"));
let hoaHoc = parseInt(prompt("Điểm hóa học"));
let sinhHoc = parseInt(prompt("Điểm sinh học"));

let tongDiem = vatLy+hoaHoc+sinhHoc;
let diemTB = tongDiem/3;

document.write("Tổng điểm: "+tongDiem);
document.write("<br>")
document.write("Điểm trung bình: "+diemTB);
}

function nhietDo() {
    let doC = parseInt(prompt("Nhap do C: "));
    let doF = (9*doC)/5 +32;

    document.write("Độ F là: "+doF);
}
function dientichDuongTron() {
let r = parseFloat(prompt("Nhap ban kinh: "));
let dienTich = r*r *3.14;

document.write("Diên tích đường tròn là: "+dienTich);

}
function chuviDuongTron() {
    let r = parseFloat(prompt("Nhập bán kinh:"));
    let chuVi = r*2*3.14;

    document.write("Diên tích đường tròn là: "+chuVi);
}

