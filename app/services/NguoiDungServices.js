function NguoiDungServices() {
    this.layDanhSachNguoiDung = function() {
        return axios({
            url: "https://5eea03ceb13d0a00164e407e.mockapi.io/api/NguoiDung",
            method: "GET"
                // Get lấy xuống
                // Post đẩy lên
                // Put cập nhập
                // Delete
        });
    }
    this.themNguoiDung = function(user) {
        return axios({
            url: "https://5eea03ceb13d0a00164e407e.mockapi.io/api/NguoiDung",
            method: "POST",
            data: user
        });
    };
    this.xoaNguoiDung = function(id) {
        return axios({
            url: `https://5eea03ceb13d0a00164e407e.mockapi.io/api/NguoiDung/${id}`,
            method: "DELETE",
        })
    }
    this.suaNguoiDung = function(id) {
        return axios({
            url: `https://5eea03ceb13d0a00164e407e.mockapi.io/api/NguoiDung/${id}`,
            method: "GET",
        })
    }
    this.capnhapNguoiDung = function(id, user) {
        return axios({
            url: `https://5eea03ceb13d0a00164e407e.mockapi.io/api/NguoiDung/${id}`,
            method: "PUT",
            data: user
        })
    }

}