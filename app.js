// Trong tài liệu đặc tả

// Mô tả tính đăng nhập: Màn hình đăng nhập gồm 2 trường tên đăng nhập và mật khẩu. 
//Mật khẩu không được trùng với tên đăng nhập. Tên đăng nhập phải tối thiểu 6 ký tự



function login(username, password) {
   

    if (username.length == 0 || password.length == 0) {
        return {isSuccess: false, message: "Tên đăng nhập hoặc mật khẩu không được bỏ trống!"}
    } 

    if(typeof password != "string" || typeof username != "string") {
        return {isSuccess: false, message: "Sai định dạng dữ liệu"}
    }
    var accCheck = /^[A-Za-z0-9_.]+$/;
    if(!accCheck.test(username)){
        return {isSuccess: false, message: "Tên đăng nhập có kí tự đặc biệt"}
      }
    
    if (password.length >= 6) {
        if (username == "khachuong" && password == "123456") {
            return {isSuccess: true, message: "Đăng nhập thành công!"}
        } else {
            return {isSuccess: false, message: "Tên đăng nhập hoặc mật khẩu không đúng"}
        }
    } else {
        return {isSuccess: false, message: "Mật khẩu phải lớn hơn 6 ký tự!"}
    }
    
}

function signIn(name, sdt, email,  password, rePass) {
    if (name.length == 0 ) {
        return {isSuccess: false, message: "Tên người dùng không được để trống!"}
    } 
    if (sdt.length == 0 ) {
        return {isSuccess: false, message: "Số điện thoại không được để trống!"}
    } 
    if (email.length == 0 ) {
        return {isSuccess: false, message: "Email không được để trống!"}
    } 
    if (password.length == 0 ) {
        return {isSuccess: false, message: "mật khẩu không được để trống!"}
    } 
    if (rePass.length == 0 ) {
        return {isSuccess: false, message: "nhập lại mật khẩu không được để trống!"}
    } 
    if(name.length > 30) {
        return {isSuccess: false, message: "Tên người dùng quá dài!"}
    }
    var rexPhone = /([0-9])\b/g;
    if(!rexPhone.test(sdt)){
        return {isSuccess: false, message: "Số điện thoại không đúng định dạng"}
    }
    var rexEmail = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
    if(!rexEmail.test(email)){
        return {isSuccess: false, message: "Email không đúng định dạng"}
    }
    if(password.length > 30) {
        return {isSuccess: false, message: "Mật khẩu quá dài!"}
    }
    if(rePass.length > 30) {
        return {isSuccess: false, message: "Mật khẩu nhập lại quá dài!"}
    }
    if(password == rePass) {
        return {isSuccess: false, message: "Yêu cầu đăng ký tài khoản thành công"}
    }else {
        return {isSuccess: false, message: "Đăng ký tài khoản thất bại"}
    }

}

function changePassword(password, newPass, cfNewPass) {
    if (password.length == 0 ) {
        return {isSuccess: false, message: "mật khẩu không được để trống!"}
    } 
    if (newPass.length == 0 ) {
        return {isSuccess: false, message: "mật khẩu mới không được để trống!"}
    } 
    if (cfNewPass.length == 0 ) {
        return {isSuccess: false, message: "nhập lại mật khẩu mới không được để trống!"}
    } 

    if(typeof password != "string" || typeof newPass != "string" || typeof cfNewPass != "string") {
        return {isSuccess: false, message: "Sai định dạng dữ liệu"}
    }
    if(newPass.length <= 3 && cfNewPass.length <= 3) {
        return {isSuccess: false, message: "Mật khẩu mới quá ngắn"}
    }else if ( newPass.length >=30 && cfNewPass.length >= 30) {
        return {isSuccess: false, message: "Mật khẩu mới quá dài"}
    }else if ( newPass != cfNewPass) {
        return {isSuccess: false, message: "Mật khẩu mới không trùng khớp nhau"}
    }else {
        if(password == 'khactuan123') {
            if(newPass == cfNewPass) {
                return {isSuccess: false, message: "Yêu cầu đổi mật khẩu thành công"}
            }else {
                return {isSuccess: false, message: "Đổi mật khẩu thất bại"}
            }
        }else {
            return {isSuccess: false, message: "Mật khẩu hiện tại không đúng"}
        }
    }
}

module.exports.login = login
module.exports.signIn = signIn
module.exports.changePassword = changePassword

// feature: tính năng

// Unit test cho function login

// Sẽ phải viết các Test case - các kịch bản test
//1 Test case cần bao gồm

// 1. Tình huống
// 2. Input data
// 3. Kết quả mong đợi


// TC01: Kiểm tra đăng nhập sai mật khẩu
// 1. Tình huống: Người dùng truyền vào tài khoản đúng nhưng mật khẩu sai 
// 2. Input: username = khachuong và password = abc
// 3. Kết qủa mong đợi (Expected result): {isSuccess: false, message: "Sai mật khẩu, vui lòng thử lại!"}

// Kết luận: Not passed (không đạt) - hay còn gọi là failed
// console.log(login(434343, "abc"))