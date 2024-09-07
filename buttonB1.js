var num = 0;

var button = document.getElementById('button');

button.onclick = function count(){
    alert("Log ADDED");
    console.log(num);
    num++;
}


///////////button 02
var num2 = 1;
var _button02 = document.getElementById('button02');

_button02.onclick = function count02(){
    num2++;
    document.getElementById('txt01').innerHTML=num2;

}


//////////// LOOP
var _button03 = document.getElementById('button03');
var num3 = 0;
var num3_1 =0;
_button03.onclick = function loopStart(){

     num3_1 = document.getElementById('numId').value;
    var jn1;
    let jn2 = 0;
    let print;

    if(num3_1 ===""){
            for (let jn1 = 0; jn1 <= 999; jn1++) {
                setTimeout(() => {
                  
                    if(jn1>=0 && jn1 <=9){
                        print= ("00") + jn1;
                    }else if (jn1>=10 && jn1 <=99){
                        print= "0" + jn1;
                    }else if(jn1>=100 && jn1<=999){
                        print=jn1;
                    }
                    document.getElementById('countUp').innerHTML = print;

                    


                }, jn1 * 1); // Delay increases with each iteration
            }
    }else if (num3_1 >= 1000){
        document.getElementById('countUp').innerHTML = "NOP";

    }else{  
            for (let jn1 = 0; jn1 <= num3_1; jn1++) {
                setTimeout(() => {

                    if(jn1>=0 && jn1 <=9){
                        print= ("00") + jn1;
                    }else if (jn1>=10 && jn1 <=99){
                        print= "0" + jn1;
                    }else if(jn1>=100 && jn1<=999){
                        print=jn1;
                    }

                    document.getElementById('countUp').innerHTML = print;
                }, jn1 * 1); // Delay increases with each iteration
            }
    }
}