"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyComponent = void 0;
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.displayPersonInfo = function () {
        console.log('EID:' + this.id);
        console.log('ENAME:' + this.name);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, salary) {
        return _super.call(this, id, name) || this;
    }
    //method
    Employee.prototype.displayEmployeeInformation = function () {
        _super.prototype.displayPersonInfo.call(this);
        console.log('Salary:' + this.salary);
    };
    return Employee;
}(Person));
var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["PER_UNIT"] = 121] = "PER_UNIT";
})(MyEnum || (MyEnum = {}));
//component 1
var ElectricBillComponent = /** @class */ (function () {
    function ElectricBillComponent() {
        this.eUnit = MyEnum.PER_UNIT;
    }
    ElectricBillComponent.prototype.calculateEBillAmount = function (nou) {
        return this.eUnit * nou;
    };
    return ElectricBillComponent;
}());
//component 2
var WaterBillComponent = /** @class */ (function () {
    function WaterBillComponent() {
        this.eUnit = MyEnum.PER_UNIT;
    }
    WaterBillComponent.prototype.calculateEBillAmount = function (nou) {
        return this.eUnit * nou;
    };
    return WaterBillComponent;
}());
//create an object and invoke the method
var eBill = new ElectricBillComponent();
console.log("show amount:" + eBill.calculateEBillAmount(100));
var MyComponent = /** @class */ (function () {
    function MyComponent() {
        this.id = 121;
    }
    MyComponent.prototype.getSqureValue = function (num) {
        return num * num;
    };
    return MyComponent;
}());
exports.MyComponent = MyComponent;
