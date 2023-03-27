let person = {
    lastName: "phạm",
    fistName: "Thành",
    getFullName: function () {
        let fullName = this.lastName + " " + this.fistName;
        return fullName;
    }
};

class SinhVien {
    constructor(maSV, ho, ten, namsinh, lop, email, SDT) {
        this.ten = ten;
        this.namsinh = namsinh;
        this.email = email;
        this.maSV = maSV;
        this.ho = ho;
        this.lop = lop;
        this.SDT = SDT;
    }

    getAge() {
        const date = new Date();
        let currentYear = date.getFullYear();
        let age = currentYear - this.namsinh;
        return age;
    }

    getFullName() {
      return `${this.ho} ${this.ten}`;
    }
}

let sv1 = new SinhVien('SV001', 'Tran', 'Tong', 1989, 'lop1', 'trantong@gmail.com', '0123456789');
let sv2 = new SinhVien('SV002', 'Nguyen', 'Hai', 1990, 'lop2', 'nguyenhai@gmail.com', '0123456788');
let sv3 = new SinhVien('SV003', 'Le', 'Ba', 1991,'lop3','leba@gmail.com','0123456787');
let sv4 = new SinhVien('SV004','Pham','Bon',1992,'lop4','phambon@gmail.com','0123456786');
let sv5= new SinhVien('SV005','Hoang','Nam',1993,'lop5','hoangnam@gmail.com','0123456785');

console.log(sv1.getFullName() + ";" + sv1.getAge() + " tuổi.");
console.log(sv2.getFullName() + ";" + sv2.getAge() + " tuổi.");
console.log(sv3.getFullName() + ";" + sv3.getAge() + " tuổi.");
console.log(sv4.getFullName() + ";" + sv4.getAge() + " tuổi.");
console.log(sv5.getFullName() + ";" + sv5.getAge() + " tuổi.");
lastName: "phạm",
    fistName: "Thành",
    getFullName: function () {
        let fullName = this.lastName + " " + this.fistName;
        return fullName;
    }
};

class SinhVien {
    constructor(maSV, ho, ten, namsinh, lop, email, SDT) {
        this.ten = ten;
        this.namsinh = namsinh;
        this.email = email;
        this.maSV = maSV;
        this.ho = ho;
        this.lop = lop;
        this.SDT = SDT;
    }

    getAge() {
        const date = new Date();
        let currentYear = date.getFullYear();
        let age = currentYear - this.namsinh;
        return age;
    }

    getFullName() {
      return `${this.ho} ${this.ten}`;
    }
}

let sv1 = new SinhVien('SV001', 'Tran', 'Tong', 1989,'lop1','trantong@gmail.com','0123456789');
let sv2 = new SinhVien('SV002', 'Nguyen', 'Hai', 1990,'lop2','nguyenhai@gmail.com','0123456788');
let sv3 = new SinhVien('SV003', 'Le', 'Ba', 1991,'lop3','leba@gmail.com','0123456787');
let sv4= new SinhVien('SV004','Pham','Bon',1992,'lop4','phambon@gmail.com','0123456786');
let sv5= new SinhVien('SV005','Hoang','Nam',1993,'lop5','hoangnam@gmail.com','0123456785');

console.log(sv1.getFullName() + ";" + sv1.getAge() + " tuổi.");
console.log(sv2.getFullName() + ";" + sv2.getAge() + " tuổi.");
console.log(sv3.getFullName() + ";" + sv3.getAge() + " tuổi.");
console.log(sv4.getFullName() + ";" + sv4.getAge() + " tuổi.");
console.log(sv5.getFullName() + ";" + sv5.getAge() + " tuổi.");

// Sắp xếp sinh viên theo tuổi
let sinhVienArray = [sv1, sv2, sv3, sv4,sv5];
sinhVienArray.sort((a,b) => a.getAge()-b.getAge());
sinhVienArray.forEach(sv => console.log(sv.getFullName()+";"+sv.getAge()+"tuổi."));