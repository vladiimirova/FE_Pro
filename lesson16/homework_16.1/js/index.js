function Student(firstName, lastName, birthYear, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades || [];

    this.attendance = new Array(25);

    this.getAge = function () {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.birthYear;
        return age;
    }

    this.getAverageGrade = function () {
        if (this.grades.length === 0) {
            return 0;
        }

        const sum = this.grades.reduce(function (acc, num) {
            return acc + num;
        }, 0);

        const average = sum / this.grades.length;
        return average;
    }

    this.present = function() {
        for (let i = 0; i < this.attendance.length; i++) {
            if (this.attendance[i] === undefined) {
                this.attendance[i] = true;
                console.log(`Відмічено присутність на занятті №${i + 1}`);
                return;
            }
        }
        console.log("Усі заняття вже відзначені.");
    };
    
    this.absent = function() {
        for (let i = 0; i < this.attendance.length; i++) {
            if (this.attendance[i] === undefined) {
                this.attendance[i] = false;
                console.log(`Відмічено відсутність на занятті №${i + 1}`);
                return;
            }
        }
        console.log("Усі заняття вже відзначені.");
    };
    
    

    this.summary = function() {
        const averageGrade = this.getAverageGrade();
        const attendedClasses = this.attendance.filter(function(status) {
            return status === true;
        }).length;

        const totalClasses = this.attendance.filter(function(status) {
            return status !== undefined;
        }).length;

        const attendanceRate = totalClasses === 0 ? 0 : attendedClasses / totalClasses;

        if (averageGrade > 90 && attendanceRate > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendanceRate > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    };
}

const student1 = new Student("Іван", "Петров", 2000, [95, 87, 92, 89]);
const student2 = new Student("Марія", "Сидоренко", 1999, [78, 82, 85, 80]);

console.log(`${student1.firstName} ${student1.lastName}, Вік: ${student1.getAge()}`);
console.log(`Середній бал: ${student1.getAverageGrade()}`);
student1.present();
student1.absent();
student1.present();
console.log(`Підсумок: ${student1.summary()}`);

console.log(`${student2.firstName} ${student2.lastName}, Вік: ${student2.getAge()}`);
console.log(`Середній бал: ${student2.getAverageGrade()}`);
student2.absent();
student2.absent();
student2.present();
console.log(`Підсумок: ${student2.summary()}`);
