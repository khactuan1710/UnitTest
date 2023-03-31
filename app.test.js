var TestCase = require('./app');

describe('Đây là nhóm test case dành cho hàm Login()', () => {
    test('TC01: Tên đăng nhập bị bỏ rỗng', () => {
        expect(TestCase.login("", "12345")).toMatchObject({isSuccess: false, message: "Tên đăng nhập hoặc mật khẩu không được bỏ trống!"})
    })
    
    test('TC02: Mật khẩu có độ dài < 6 ký tự', () => {
        expect(TestCase.login("khachuong", "12345")).toMatchObject({isSuccess: false, message: "Mật khẩu phải lớn hơn 6 ký tự!"})
    })
    
    
    test('TC03: Kiểu dữ liệu truyền vào bị sai', () => {
        expect(TestCase.login(399944, "12345678")).toMatchObject({isSuccess: false, message: "Sai định dạng dữ liệu"})
    })

    test('TC04: Tên đăng nhập hoặc mật khẩu không đúng', () => {
        expect(TestCase.login("fdfdfdf", "12345678")).toMatchObject({isSuccess: false, message: "Tên đăng nhập hoặc mật khẩu không đúng"})
    })
    test('TC05: Đăng nhập đúng thông tin', () => {
        expect(TestCase.login("khachuong", "123456")).toMatchObject({isSuccess: true, message: "Đăng nhập thành công!"})
    })
    test('TC06: Đăng nhập ki tụ đăng biệt', () => {
        expect(TestCase.login("khachuo*ng", "123456")).toMatchObject({isSuccess: false, message: "Tên đăng nhập có kí tự đặc biệt"})
    })
})

describe('Đây là nhóm test case dành cho hàm changePassword()', () => {
    test('TC01: Mật khẩu cũ bị rỗng', () => {
        expect(TestCase.changePassword("", "123456", "123456")).toMatchObject({isSuccess: false, message: "mật khẩu không được để trống!"})
    })
    
    test('TC02: Mật khẩu mới bị rỗng', () => {
        expect(TestCase.changePassword("khactuan123", "", "123456")).toMatchObject({isSuccess: false, message: "mật khẩu mới không được để trống!"})
    })
    test('TC03: Mật khẩu nhập lại bị rỗng', () => {
        expect(TestCase.changePassword("khactuan123", "123456", "")).toMatchObject({isSuccess: false, message: "nhập lại mật khẩu mới không được để trống!"})
    })
    test('TC04: Kiểu dữ liệu truyền vào bị sai', () => {
        expect(TestCase.changePassword(399944, "123456", "123456")).toMatchObject({isSuccess: false, message: "Sai định dạng dữ liệu"})
    })
    test('TC04: Kiểu dữ liệu truyền vào bị sai', () => {
        expect(TestCase.changePassword(399944, "123456", "123456")).toMatchObject({isSuccess: false, message: "Sai định dạng dữ liệu"})
    })
    test('TC04:  Mật khẩu mới ngắn', () => {
        expect(TestCase.changePassword("399944", "13", "13")).toMatchObject({isSuccess: false, message: "Mật khẩu mới quá ngắn"})
    })
    test('TC04:  Mật khẩu mới dài', () => {
        expect(TestCase.changePassword("399944", "139994439994439994dfdfdfdffdfdfd4fdfdfdf39994423", "1239994fdfdfdfdfdfdfdfdf43999443999443999443999443")).toMatchObject({isSuccess: false, message: "Mật khẩu mới quá dài"})
    })
    test('TC04:  Mật khẩu mới và mật khẩu nhập lại k giống nhau', () => {
        expect(TestCase.changePassword("khactuan123", "fd22222", "2222ddd")).toMatchObject({isSuccess: false, message: "Mật khẩu mới không trùng khớp nhau"})
    })
    test('TC04:  Mật khẩu hiện tại không đúng', () => {
        expect(TestCase.changePassword("khactuan133", "fd22222", "fd22222")).toMatchObject({isSuccess: false, message: "Mật khẩu hiện tại không đúng"})
    })
    test('TC04:  Mật khẩu hiện tại không đúng', () => {
        expect(TestCase.changePassword("khactuan123", "fd22222", "fd22222")).toMatchObject({isSuccess: false, message: "Đổi mật khẩu thành công"})
    })
})

describe('Đây là nhóm test case dành cho hàm signIn()', () => {
    test('TC01: Tên người dùng không được để trống!', () => {
        expect(TestCase.signIn("", "0930434345", "tg@gmail.com", "tuan123", "tuan123")).toMatchObject({isSuccess: false, message: "Tên người dùng không được để trống!"})
    })
    test('TC02: Số điện thoại không được để trống!', () => {
        expect(TestCase.signIn("khatuan", "", "tg@gmail.com", "tuan123", "tuan123")).toMatchObject({isSuccess: false, message: "Số điện thoại không được để trống!"})
    })
    test('TC03: Email không được để trống!', () => {
        expect(TestCase.signIn("khatuan", "0930434345", "", "tuan123", "tuan123")).toMatchObject({isSuccess: false, message: "Email không được để trống!"})
    })
    test('TC03: mật khẩu không được để trống!', () => {
        expect(TestCase.signIn("khatuan", "0930434345", "tg@gmail.com", "", "tuan123")).toMatchObject({isSuccess: false, message: "mật khẩu không được để trống!"})
    })
    test('TC03: nhập lại mật khẩu không được để trống!', () => {
        expect(TestCase.signIn("khatuan", "0930434345", "tg@gmail.com", "tuan123", "")).toMatchObject({isSuccess: false, message: "nhập lại mật khẩu không được để trống!"})
    })
    test('TC03: Tên người dùng quá dài!', () => {
        expect(TestCase.signIn("khatuafdf nfdofn oèwf lfnowef lkdnfdkfn dfndklf dn", "0930434345", "tg@gmail.com", "tuan123", "")).toMatchObject({isSuccess: false, message: "Tên người dùng quá dài!"})
    })
    test('TC03: Số điện thoại không đúng định dạng', () => {
        expect(TestCase.signIn("khatuan", "0930abc434345", "tg@gmail.com", "tuan123", "tuan123")).toMatchObject({isSuccess: false, message: "Số điện thoại không đúng định dạng"})
    })
    test('TC03: Email không đúng định dạng', () => {
        expect(TestCase.signIn("khatuan", "0930abc434345", "tgfsssss", "tuan123", "tuan123")).toMatchObject({isSuccess: false, message: "Email không đúng định dạng"})
    })
    test('TC03: Mật khẩu quá dài!', () => {
        expect(TestCase.signIn("khatuan", "0930abc434345", "tgfsssss", "tuan12fdfdfdfdfdfdfdffdfdf dfd fddfddsddsdssdfdfdfddddfffdddf3", "tuan123")).toMatchObject({isSuccess: false, message: "Mật khẩu quá dài!"})
    })
    test('TC03: Mật khẩu nhập lại quá dài!', () => {
        expect(TestCase.signIn("khatuan", "0930abc434345", "tgfsssss", "fdfdfdfdfd", "tuan12fdfdfdfdfdfdfdffdfdfdsddsdsd dfd fddfdfdfdfddddfffdddf3fdddsd")).toMatchObject({isSuccess: false, message: "Mật khẩu nhập lại quá dài!"})
    })
    test('TC03: Yêu cầu đăng ký tài khoản thành công', () => {
        expect(TestCase.signIn("khatuan", "0930abc434345", "tgfsssss", "tuan1234", "tuan1234")).toMatchObject({isSuccess: false, message: "Yêu cầu đăng ký tài khoản thành công"})
    })
    test('TC03: Đăng ký tài khoản thất bại', () => {
        expect(TestCase.signIn("khatuan", "0930abc434345", "tgfsssss", "tuan1234", "tuan13234")).toMatchObject({isSuccess: false, message: "Đăng ký tài khoản thất bại"})
    })
})