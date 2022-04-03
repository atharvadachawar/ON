



function swap(){
const button=document.getElementById("swap");
const baseOne=document.getElementById("1-value");
const baseTwo=document.getElementById("2-value");


let temp=baseOne.value;
baseOne.value=baseTwo.value;
baseTwo.value=temp;

}






function convert() {
   const input=document.getElementById("ip-value");
   const ipBase=document.getElementById("1-value");
   const opBase=document.getElementById("2-value");
   let  output=''
   
    

   if(ipBase.value==opBase.value)
   {
       output=input.value;
   }

    
   if (ipBase.value==="Decimal" ){

   if (opBase.value==="Hexadecimal")
   {
       let temp= parseInt(input.value);
       let val=temp.toString(16);
       output=val;
   }

  else if (opBase.value==="Octal")
   {
       let temp= parseInt(input.value);
       let val= temp.toString(8);
       output=val;
   }

  else if (opBase.value==="Binary")
{    
     let temp= parseInt(input.value);
        let val=temp.toString(2);
     output=val;

}
   }

 if (ipBase.value==="Hexadecimal"){
     if (opBase.value==="Decimal")
{
      let temp= parseInt(input.value);
       let val=temp.toString(10);
       output=val;
   }

   else if (opBase.value==="Octal")
   {
         let temp= parseInt(input.value);
          let val=temp.toString(8);
          output=val;
      }

     else if (opBase.value==="Binary")
      {
            let temp= parseInt(input.value);
             let val=temp.toString(2);
             output=val;
         }
        }


if (ipBase.value==="Octal")
{
    if (opBase.value==="Decimal")
{
      let temp= parseInt(input.value);
       let val=temp.toString(10);
       output=val;
   }
   if (opBase.value==="Hexadecimal")
   {
         let temp= parseInt(input.value);
          let val=temp.toString(16);
          output=val;
      }

      if (opBase.value==="Binary")
      {
            let temp= parseInt(input.value);
             let val=temp.toString(2);
             output=val;
         }
        }


         
if (ipBase.value==="Binary")
{
    if(opBase.value==="Decimal")
{
      let temp= parseInt(input.value);
       let val=parseInt(temp,2);
       output=val;
   }
   else if (opBase.value==="Hexadecimal")
   {
         let temp= parseInt(input.value);
          let val=parseInt(temp,2);
          output=val;
      }

      else if (opBase.value==="Octal")
      {
            let temp= parseInt(input.value);
             let val=temp.toString(8);
             output=val;
         }
        }
     
        document.getElementById("op-value").value=output;








    //Decimal to Decimal
    //console.log("Decimal :",input);
     // console.log(input);

    //Decimal to Binary
   // console.log("Binary :",parseInt(input,2));
   // console.log(input.toString(2));

    //Decimal to Octal
   // console.log("Octal  :",parseInt(input,8));
    //console.log(input.toString(8));

    //Decimal to Hexadecimal
   // console.log("Hexadecimal :",parseInt(input,16));
   // console.log(input.toString(16));



}