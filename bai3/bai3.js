let a = prompt('Type a number: ',);
 switch (a>0) {
     case true :
         alert('1');
         break;
     case false:
         switch (a < 0){
             case true :
                 alert('-1');
                 break;
             case  false :
                 alert('0');
                 break;
         }
 }