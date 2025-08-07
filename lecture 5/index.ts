class Person{
    public id:number;
    protected name:string;
    
    constructor(id:number, name:string){
        this.id=id;
        this.name=name;
    }

    displayPersonInfo():void{
        console.log('EID:' +this.id);
        console.log('ENAME:' +this.name);
    }
 
}

class Employee extends Person{
    //properties
    salary:number;

    constructor(id:number, name:string, salary:number){
        super(id, name);
    }

    //method
    displayEmployeeInformation():void{
        super.displayPersonInfo();
        console.log('Salary:'+this.salary);
    }
    
}

enum MyEnum{
    PER_UNIT = 121
}

interface IBill{
    calculateEBillAmount(nou:number):number;
}

//component 1
class ElectricBillComponent implements IBill{
    eUnit:number=MyEnum.PER_UNIT;

    calculateEBillAmount(nou:number): number {
        return this.eUnit*nou;
    }
}

//component 2
class WaterBillComponent implements IBill{
    eUnit:number=MyEnum.PER_UNIT;

    calculateEBillAmount(nou:number): number {
        return this.eUnit*nou;
    }
}

//create an object and invoke the method
var eBill = new ElectricBillComponent();
console.log("show amount:"+eBill.calculateEBillAmount(100));


export class MyComponent{
    id:number=121;

    getSqureValue(num:number):number{
        return num*num;
    }
}