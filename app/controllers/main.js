var nguoiDungServices = new NguoiDungServices();

getListUser();

function getListUser() {
    nguoiDungServices.layDanhSachNguoiDung()
        // Lấy về thành công
        .then(function(result) {
            console.log(result.data);
            renderTable(result.data);
        })
        // Lấy về không thành công
        .catch(function(err) {
            console.log(err);
        });

}

function renderTable(array) {
    var contentHTML = "";
    array.forEach(function(item, index) {
        contentHTML += `
        <tr>
        <td>${index + 1}</td>
        <td>${item.taiKhoan}</td>
        <td>${item.matKhau}</td>
        <td>${item.hoTen}</td>
        <td>${item.email}</td>
        <td>${item.soDT}</td>
        <td>${item.maLoaiNguoiDung}</td>
        <td>
        <button class ="btn btn-info" data-toggle="modal" data-target="#myModal" onclick ="editUser(${item.id})">Sữa</button>
        <button class ="btn btn-danger" onclick="deleteUser(${item.id})">Xóa</button>
        </td>
        </tr>
        `;
    });
    getElm("tblDanhSachNguoiDung").innerHTML = contentHTML;
}

getElm("btnThemNguoiDung").addEventListener("click", function() {
    var footer = "<button class ='btn btn-success'onclick ='addUser()'>Add user</button>"
    document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
    document.getElementsByClassName("modal-title")[0].innerHTML = "Add User";

    getElm("TaiKhoan").removeAttribute("disabled")

    getElm("TaiKhoan").value = "";
    getElm("HoTen").value = "";
    getElm("MatKhau").value = "";
    getElm("Email").value = "";
    getElm("SoDienThoai").value = "";
    getElm("loaiNguoiDung").value = "";
});

/**Delete */
function deleteUser(id) {
    nguoiDungServices.xoaNguoiDung(id)
        .then(function(result) {
            getListUser();
        })
        .catch(function(err) {
            console.log(err);
        })
}

function editUser(id) {
    var footer = `<button class='btn btn-success' onclick="updateUser(${id})">Update user</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
    document.getElementsByClassName("modal-title")[0].innerHTML = "Edit User";
    nguoiDungServices.suaNguoiDung(id)
        .then(function(result) {
            console.log(result.data)
            getElm("TaiKhoan").value = result.data.taiKhoan;
            getElm("TaiKhoan").setAttribute("disabled", true);
            getElm("HoTen").value = result.data.hoTen;
            getElm("MatKhau").value = result.data.matKhau;
            getElm("Email").value = result.data.email;
            getElm("SoDienThoai").value = result.data.soDT;
            getElm("loaiNguoiDung").value = result.data.maLoaiNguoiDung;
        })
        .catch(function(err) {});
}

/**Update */
function updateUser(id) {
    var taiKhoan = getElm("TaiKhoan").value;
    var hoTen = getElm("HoTen").value;
    var matKhau = getElm("MatKhau").value;
    var email = getElm("Email").value;
    var soDT = getElm("SoDienThoai").value;
    var maLoaiNguoiDung = getElm("loaiNguoiDung").value;
    var user = new NguoiDung(taiKhoan, hoTen, matKhau, email, soDT, maLoaiNguoiDung);
    nguoiDungServices.capnhapNguoiDung(id, user)
        .then(function(result) {
            getListUser();
        })
        .catch(function(err) {

        })
}
/**
 * AddUser
 */
function addUser() {
    var taiKhoan = getElm("TaiKhoan").value;
    var hoTen = getElm("HoTen").value;
    var matKhau = getElm("MatKhau").value;
    var email = getElm("Email").value;
    var soDT = getElm("SoDienThoai").value;
    var maLoaiNguoiDung = getElm("loaiNguoiDung").value;

    var user = new NguoiDung(taiKhoan, hoTen, matKhau, email, soDT, maLoaiNguoiDung);
    nguoiDungServices.themNguoiDung(user)
        .then(function(result) {
            getListUser();
        })
        .catch(function(err) {
            console.log(err);
        });
}


function getElm(name) {
    return document.getElementById(name);
}