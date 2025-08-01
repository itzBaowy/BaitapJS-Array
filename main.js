// mảng để lưu trữ các số người dùng nhập
var numberArray = [];
var floatArray = [];

// hàm dùng để thêm số vào mảng khi người dùng click
function addNumber() {
  var input = document.getElementById('numberInput');
  var value = parseInt(input.value);

  // kiểm tra xem giá trị có phải là số hợp lệ không
  if (!isNaN(value)) {
    numberArray.push(value);
    displayArray();
    input.value = '';
    input.focus();
  } else {
    alert('Vui lòng nhập một số nguyên hợp lệ.');
  }
}

// hiển thị mảng ra màn hình
function displayArray() {
  var display = document.getElementById('arrayDisplay');
  display.textContent = 'Các phần tử trong mảng: ' + numberArray.join(', ');
}

/**
 * 1. Tính tổng số dương
 *
 * Đầu vào:
 *   - Mảng numberArray chứa các số nguyên
 *
 * Xử lý:
 *   - Duyệt qua từng phần tử trong mảng
 *   - Nếu phần tử > 0 thì cộng dồn vào biến tổng
 *
 * Đầu ra:
 *   - Tổng các số dương trong mảng
 */
function tinhTongSoDuong() {
  var tong = 0;
  for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      tong += numberArray[i];
    }
  }
  document.getElementById('result1').textContent = 'Tổng các số dương: ' + tong;
}

/**
 * 2. Đếm số dương
 *
 * Đầu vào:
 *   - Mảng numberArray chứa các số nguyên
 *
 * Xử lý:
 *   - Duyệt qua từng phần tử trong mảng
 *   - Nếu phần tử > 0 thì tăng biến đếm lên 1
 *
 * Đầu ra:
 *   - Số lượng phần tử dương trong mảng
 */
function demSoDuong() {
  var dem = 0;
  for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      dem++;
    }
  }
  document.getElementById('result2').textContent = 'Số lượng số dương: ' + dem;
}

/**
 * 3. Tìm số nhỏ nhất trong mảng
 *
 * Đầu vào:
 *   - Mảng numberArray chứa các số nguyên
 *
 * Xử lý:
 *   - Gán phần tử đầu tiên là min
 
 *   - So sánh lần lượt các phần tử, nếu nhỏ hơn min thì cập nhật min là phần tử đó
 *
 * Đầu ra:
 *   - Giá trị nhỏ nhất trong mảng
 */
function timSoNhoNhat() {
  if (numberArray.length === 0) {
    return;
  }

  var min = numberArray[0];
  for (var i = 1; i < numberArray.length; i++) {
    if (numberArray[i] < min) {
      min = numberArray[i];
    }
  }

  document.getElementById('result3').textContent = 'Số nhỏ nhất: ' + min;
}

/**
 * 4. Tìm số dương nhỏ nhất
 *
 * Đầu vào:
 *   - Mảng numberArray chứa các số nguyên
 *
 * Xử lý:
 *   - Duyệt qua từng phần tử trong mảng
 *   - Tìm các phần tử > 0
 *   - Trong các số dương, tìm giá trị nhỏ nhất tương tự ở trên
 *
 * Đầu ra:
 *   - Số dương nhỏ nhất trong mảng hoặc thông báo không có
 */
function timSoDuongNhoNhat() {
  var min = null;
  for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      if (numberArray[i] < min) {
        min = numberArray[i];
      }
    }
  }

  if (min !== null) {
    document.getElementById('result4').textContent = 'Số dương nhỏ nhất: ' + min;
  } else {
    document.getElementById('result4').textContent = 'Không có số dương trong mảng.';
  }
}

/**
 * 5. Tìm số chẵn cuối cùng trong mảng
 *
 * Đầu vào:
 *   - Mảng numberArray chứa các số nguyên
 *   - Khởi tạo giá trị chẵn là -1 sẽ in ra -1 nếu logic không được xử lí
 *
 * Xử lý:
 *   - Duyệt mảng từ cuối về đầu
 *   - Nếu gặp số chia hết cho 2 (chẵn) thì lưu lại và dừng dùng break;
 *
 * Đầu ra:
 *   - Số chẵn cuối cùng trong mảng hoặc -1 nếu không có
 */
function timSoChanCuoi() {
  var chan = -1;

  for (var i = numberArray.length - 1; i >= 0; i--) {
    if (numberArray[i] % 2 === 0) {
      chan = numberArray[i];
      break;
    }
  }

  document.getElementById('result5').textContent = 'Số chẵn cuối cùng: ' + chan;
}

/**
 * 6. Đổi chỗ 2 giá trị trong mảng
 *
 * Đầu vào:
 *   - Mảng numberArray chứa các số nguyên
 *   - Hai vị trí i và j người dùng nhập vào
 *
 * Xử lý:
 *   - Kiểm tra vị trí hợp lệ
 *   - Dùng biến tạm để hoán đổi giá trị tại 2 vị trí
 *
 * Đầu ra:
 *   - Thông báo cho người dùng nếu đổi thành công hay thất bại
 *   - Mảng sau khi đổi chỗ 2 giá trị sẽ được cập nhật bằng cách gọi lại hàm displayArray();
 */
function doiChoGiaTri() {
  var i = parseInt(document.getElementById('index1').value);
  var j = parseInt(document.getElementById('index2').value);

  if (!isNaN(i) && !isNaN(j) && i >= 0 && j >= 0 && i < numberArray.length && j < numberArray.length) {
    var temp = numberArray[i];
    numberArray[i] = numberArray[j];
    numberArray[j] = temp;

    displayArray();
    document.getElementById('result6').textContent = 'Đã đổi vị trí ' + i + ' và ' + j;
  } else {
    document.getElementById('result6').textContent = 'Vị trí không hợp lệ.';
  }
}

/**
 * 7. Sắp xếp mảng tăng dần
 *
 * Đầu vào:
 *   - Mảng numberArray chứa các số nguyên
 *
 * Xử lý:
 *   - Duyệt mảng và so sánh từng cặp phần tử
 *   - Dùng thuật toán sắp xếp nổi bọt (bubble sort)
 *
 * Đầu ra:
 *   - Mảng được sắp xếp theo thứ tự tăng dần được cập nhật bằng cách gọi lại hàm displayArray();
 */
function sapXepTangDan() {
  for (var i = 0; i < numberArray.length - 1; i++) {
    for (var j = i + 1; j < numberArray.length; j++) {
      if (numberArray[i] > numberArray[j]) {
        var temp = numberArray[i];
        numberArray[i] = numberArray[j];
        numberArray[j] = temp;
      }
    }
  }

  displayArray();
  document.getElementById('result7').textContent = 'Đã sắp xếp mảng tăng dần.';
}
/**
 * 8. Tìm số nguyên tố đầu tiên trong mảng
 *
 * Đầu vào:
 *   - Mảng numberArray chứa các số nguyên
 *
 * Xử lý:
 *   - Kiểm tra từng phần tử xem có phải số nguyên tố không (dùng hàm isSoNguyenTo để check)
 *   - Nếu số n không chia hết cho bất cứ số nào ngoài 1 và chính nó thì trả về true
 *   - Nếu đúng thì trả về ngay số đó
 *
 * Đầu ra:
 *   - Số nguyên tố đầu tiên trong mảng hoặc -1 nếu không có
 */
function isSoNguyenTo(n) {
  if (n < 2) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function timSoNguyenToDauTien() {
  for (var i = 0; i < numberArray.length; i++) {
    if (isSoNguyenTo(numberArray[i])) {
      document.getElementById('result8').textContent = 'Số nguyên tố đầu tiên: ' + numberArray[i];
      return;
    }
  }

  document.getElementById('result8').textContent = 'Không có số nguyên tố. Trả về -1';
}

/**
 * 9. Đếm số nguyên trong mảng số thực
 *
 * Đầu vào:
 *   - Mảng floatArray chứa các số thực
 *
 * Xử lý:
 *   - Duyệt từng phần tử
 *   - Dùng hàm Number.isInteger để kiểm tra
 *
 * Đầu ra:
 *   - Số lượng số nguyên trong mảng
 */
function addFloatNumber() {
  var input = document.getElementById('floatInput');
  var value = parseFloat(input.value);

  if (!isNaN(value)) {
    floatArray.push(value);
    displayFloatArray();
    input.value = '';
    input.focus();
  } else {
    alert('Vui lòng nhập một số hợp lệ.');
  }
}

function displayFloatArray() {
  var display = document.getElementById('floatArrayDisplay');
  display.textContent = 'Mảng số thực:  ' + floatArray.join(', ');
}

function demSoNguyen() {
  var count = 0;
  for (var i = 0; i < floatArray.length; i++) {
    if (Number.isInteger(floatArray[i])) {
      count++;
    }
  }

  document.getElementById('result9').textContent = 'Có ' + count + ' số nguyên.';
}

/**
 * 10. So sánh số âm và số dương
 *
 * Đầu vào:
 *   - Mảng numberArray chứa các số nguyên
 *   - Biến soAm và soDuong để lưu giá trị của tổng số dương và số âm
 *
 * Xử lý:
 *   - Duyệt qua từng phần tử, nếu có số lớn hơn 0 thì tăng biến số dương lên 1, ngược lại tăng biến số âm lên 1
 *   - So sánh 2 giá trị này
 *
 * Đầu ra:
 *   - Chuỗi kết luận: số âm nhiều hơn, số dương nhiều hơn, hoặc bằng nhau
 */
function soSanhAmDuong() {
  var soAm = 0;
  var soDuong = 0;

  for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      soDuong++;
    } else if (numberArray[i] < 0) {
      soAm++;
    }
  }

  var ketQua = '';
  if (soDuong > soAm) {
    ketQua = 'Số dương nhiều hơn.';
  } else if (soAm > soDuong) {
    ketQua = 'Số âm nhiều hơn.';
  } else if (soAm === 0 && soDuong === 0) {
    ketQua = 'Không có số nào';
  } else {
    ketQua = 'Số âm và số dương bằng nhau'
  }
  
  document.getElementById('result10').textContent = ketQua;
}

