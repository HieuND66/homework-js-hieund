
//------------------------------------- Câu 1:
//--- Khai báo biến đúng
function cau1(){
   console.log('Câu 1:');

   let $Data ;
   let userName;
   let age;
   let _address;
   let chane2;
   
   //khai báo sai
   // let 50Percent;
   // let catch;
   // let %Percent;
   // let Getdata;
   // let 10;
}
cau1();
// -------------------------------------- Câu 2. 
function cau2(){
   console.log('Câu 2:');
   let x = 2;
   let y = 4;
   
   let add = x +y;
   let  sub = y -x;
   let division = y/x;
   let multi = x*y;
   let z = y%x;
   console.log('total = ' + add);
   console.log('sub = ' + sub);
   console.log('division = ' + division);
   console.log('multi = ' + multi);
   console.log('z = ' + z);
}
cau2();

//-------------------------------------- câu 3:
function cau3(){
console.log('Câu 3:');
   var totalFunc = function(){
      let x = 5;
      var values = ++x + x++ - --x - x--
      console.log(values);
   }
   totalFunc()
   
   var xyFunc = function(){
      let x = 6; let y = 10;
      // var values2 =  ++y - y++ + x++ + x-- - --x - --y
      let a = x++;
      let b = x--;
      let c = --x
      //-------------------11 - 11 + 6 + 7 - 5 - 11
      console.log(a,b,c);
   }
   xyFunc();
   
   var xyzFunc = function(){
      let x = 10; let y = 12; let z = 16
      var values3 = x++ + z-- - --x + --y - y-- + ++y + ++z + --z + x--
      //---------10 + 16 - 10 + 11 - 11 + 11 + 16 + 15 + 10
      // ---  x = 11, y = 11, z = 15
      var value3_1 = ++x - x++ + z++ + ++y - y-- 
      //-------- 11 - 11 + 15 + 11 - 11
      console.log(values3);
      console.log(value3_1);
   }
   xyzFunc();
}
cau3();

// ---------------------------------- Câu 4:
function cau4(){
   console.log('Câu 4: ');
   var variable1 = 10;
   var variable2 = 'hello';
   var variable3;
   var variable4 = {
      name : 'Duy Hieu',
      age: 15
   } 
   let variable5 = false;
   console.log('data type: ' + typeof variable1);
   console.log('data type: ' + typeof variable2);
   console.log('data type: ' + typeof variable3);
   console.log('data type: ' + typeof variable4);
   console.log('data type: ' + typeof variable5);
}
cau4()


// ---------------------------------- Câu 5:
function cau5(){
   console.log('Câu 5: ');
   let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   let total = newArray[0] + newArray[1];
   let multi = newArray[0] * newArray.length;
   console.log('total: ' + total);
   console.log('multi: ' + multi);
}
cau5();



// ----------------------------------Câu 6:
function cau6(){
   console.log('Câu 6: ');
   let obj = {
      firstName: 'Duy',
      lastName: 'Hieu',
      age: 10,
      favorite: 'play soccer'
   }
   console.log('No change: '+ obj.firstName +  ' ' + obj.lastName );
   obj.firstName = 'Ngoc'
   obj.lastName = 'Ngan'
   console.log('ful name: ' + obj.firstName +  ' ' + obj.lastName);
}

cau6();

