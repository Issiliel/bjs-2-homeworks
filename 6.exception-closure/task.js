// задача 1
function parseCount(arg) {
    const number = Number.parseInt(arg);
    if(isNaN(number)) {
        throw new Error("Невалидное значение");
    }
    return number;
}

function validateCount(arg) {
    try {
        return parseCount(arg);
    }
    catch(error) {
        return error;
    }
}

// задача 2
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if((this.a + this.b)<this.c || (this.b + this.c)<this.a || 
        (this.a + this.c)<this.b || this.a === undefined || 
        this.b === undefined || this.c === undefined) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = 0.5 * this.getPerimeter();
        const d = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return +d.toFixed(3);
    }
}
function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch(error) {
        return {
            getArea() {
                return "Ошибка! Треугольник не существует";
            },
            getPerimeter(){
                return "Ошибка! Треугольник не существует";
            }
        }   
    }
}