function cau1(number){
   console.log('Câu 1:');
   if(number > 0){
      if(number % 2 === 0){
         console.log('số ' + number +': là số chẵn và số dương');
      }else{
         console.log('số ' + number +': là số lẽ và số dương');
      }
   }else if(number < 0){
      if(number % 2 === 0){
         console.log('số ' + number +': là số chẵn và số âm');
      }else{
         console.log('số ' + number +': là số lẽ và số âm');
      }
      
   }else{
      console.log('số ' + number +': Không phải là số âm cũng không phải là số dương');
   }
   
}
cau1(0);


function cau2(values){
   console.log('Câu 2:');
   switch(values){
      case  1:{
         console.log('Tháng ' + values + ' có 31 ngày');
         break;
      }
      case  2:{
         console.log('Tháng ' + values + ' có 28 hoạc 29 ngày');
         break;
      }
      case  3:{
         console.log('Tháng ' + values + ' có 31 ngày');
         break;
      }
      case  4:{
         console.log('Tháng ' + values + ' có 30 ngày');
         break;
      }
      case  5:{
         console.log('Tháng ' + values + ' có 31 ngày');
         break;
      }
      case  6:{
         console.log('Tháng ' + values + ' có 30 ngày');
         break;
      }
      case  7:{
         console.log('Tháng ' + values + ' có 31 ngày');
         break;
      }
      case  8:{
         console.log('Tháng ' + values + ' có 31 ngày');
         break;
      }
      case  9:{
         console.log('Tháng ' + values + ' có 30 ngày');
         break;
      }
      case  10:{
         console.log('Tháng ' + values + ' có 31 ngày');
         break;
      }
      case  11:{
         console.log('Tháng ' + values + ' có 30 ngày');
         break;
      }
      case  12:{
         console.log('Tháng ' + values + ' có 31 ngày');
         break;
      }
      default: {
         console.log('Vui lòng nhập từ tháng 1 đến tháng 2 ');
      }
   }
}
cau2(13);

function cau3(variabe){
   console.log('Câu 3:');
   if(variabe > 0 ){
      if(variabe % 1 == 0){
         console.log('số '+ variabe +' là nguyên dương');
      }else{
         console.log('số '+ variabe +' Không phải là số nguyên');
      }
   }else if(variabe < 0 ){
      if(variabe % 1 == 0){
         console.log('số '+ variabe +' nguyên âm');
      }else{
         console.log('số '+ variabe +' Không phải là số nguyên');
      }
   }else{
      console.log('không phải số cần kiểm tra');
   }
      
  };

  cau3(0)

  function cau4(value1, value2, isCheck){
     console.log('Câu 4:');
      if(typeof value1 && typeof value2 === 'number'){
         let result;
         switch(isCheck){
            case  '+':{
               console.log( result = value1 +value2);
              break;
            }
            case  '-':{
               console.log( result = value1 - value2);
              break;
            }
            case  '*':{
               console.log( result = value1 * value2);
              break;
            }
            case  '/':{
               console.log( result = value1 / value2);
              break;
            }
            case  '%':{
               console.log( result = value1 % value2);
              break;
            }
            default: {
               console.log('Vui lòng nhập đúng phép toán(+,-,*,/,%)');
            }
         }
      }else{
         console.log('Số nhập không đúng');
      }
 
  }
  cau4(3,5,'2')