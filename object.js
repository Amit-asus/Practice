const obj = {
    name :  'amit' ,
    age : 12  ,
    printData : function (){
        console.log(`name : ${this.name}  age is  : ${this.age}`)
    }
}


obj.printData() ;