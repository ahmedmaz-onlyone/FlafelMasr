let cl_order=document.getElementsByClassName("order_section");
let pls=document.getElementsByClassName("pls");
let minus=document.getElementsByClassName("min"); // You fixed the name clash here, great job!
let quantity1=document.getElementById("quantity1");
let quantity2=document.getElementById("quantity2");
let quantity3=document.getElementById("quantity3");
let quantity4=document.getElementById("quantity4");
let quantity5=document.getElementById("quantity5");
let quantity6=document.getElementById("quantity6");
let quantity7=document.getElementById("quantity7");
let quantity8=document.getElementById("quantity8");
let quantity9=document.getElementById("quantity9");
let quantity10=document.getElementById("quantity10");
let shownhead=document.getElementsByClassName("shownh");
let showntext=document.getElementsByClassName("order-app");

function plus1(){
    quantity1.value++;
}
function minus1(){
    if(quantity1.value>=1){
        quantity1.value--;
    }
    else{
        quantity1.value=0;
    }}

function plus2(){
    quantity2.value++;
}
function minus2(){
    if(quantity2.value>=1){
        quantity2.value--;
    }
    else{
        quantity2.value=0;
    }}

function plus3(){
    quantity3.value++;
}
function minus3(){
    if(quantity3.value>=1){
        quantity3.value--;
    }
    else{
        quantity3.value=0;
    }}
function plus4(){
    quantity4.value++;
}
function minus4(){
    if(quantity4.value>=1){
        quantity4.value--;
    }
    else{
        quantity4.value=0;
    }}
function plus5(){
    quantity5.value++;
}
function minus5(){
    if(quantity5.value>=1){
        quantity5.value--;
    }
    else{
        quantity5.value=0;
    }}
function plus6(){
    quantity6.value++;
}
function minus6(){
    if(quantity6.value>=1){
        quantity6.value--;
    }
    else{
        quantity6.value=0;
    }}
function plus7(){
    quantity7.value++;
}
function minus7(){
    if(quantity7.value>=1){
        quantity7.value--;
    }
    else{
        quantity7.value=0;
    }}
function plus8(){
    quantity8.value++;
}
function minus8(){
    if(quantity8.value>=1){
        quantity8.value--;
    }
    else{
        quantity8.value=0;
    }}
function plus9(){
    quantity9.value++;
}
function minus9(){
    if(quantity9.value>=1){
        quantity9.value--;
    }
    else{
        quantity9.value=0;
    }}
function plus10(){
    quantity10.value++;
}
function minus10(){
    if(quantity10.value>=1){
        quantity10.value--;
    }
    else{
        quantity10.value=0;
    }}

let order_summary = document.getElementById("order-summary");
let morder = document.getElementById("show");
let aorder = document.getElementById("apply");

morder.addEventListener("click", function () {

    order_summary.innerHTML = "";

    let val1 = quantity1.value;
    let val2 = quantity2.value;
    let val3 = quantity3.value;
    let val4 = quantity4.value;
    let val5 = quantity5.value;
    let val6 = quantity6.value;
    let val7 = quantity7.value;
    let val8 = quantity8.value;
    let val9 = quantity9.value;
    let val10 = quantity10.value;
    if (val1 != 0){
        order_summary.innerHTML +=   val1 + " sandwich flafely" + "<br>";

    }
    if (val2 != 0){
        order_summary.innerHTML +=   val2 + " sandawich egytpian beans" + "<br>";


    }
    if (val3 != 0){
        order_summary.innerHTML +=   val3 + " sandawich alexandrian beans" + "<br>";

    }
    if (val4 != 0){
        order_summary.innerHTML +=   val4 + " sandwich flafel with beans" + "<br>";

    }
    if (val5 != 0){
        order_summary.innerHTML +=   val5 + " sandwich flafel with eggs" + "<br>";

    }
    if (val6 != 0){
        order_summary.innerHTML +=   val6 + " plate flafel masr" + "<br>";

    }
    if (val7 != 0){
        order_summary.innerHTML +=   val7 + " plate el tekheen" + "<br>";

    }
    if (val8 != 0){
        order_summary.innerHTML +=   val8 + " offer 1" + "<br>";
    }
    if (val9 != 0){
        order_summary.innerHTML +=   val9 + " offer 2" + "<br>";
    }
    if (val10 != 0){
        order_summary.innerHTML +=   val10 + " offer 3" + "<br>";
    } 

    quantity1.value=0;
    quantity2.value=0;
    quantity3.value=0;
    quantity4.value=0;
    quantity5.value=0;
    quantity6.value=0;
    quantity7.value=0;
    quantity8.value=0;
    quantity9.value=0;
    quantity10.value=0;
})
    
let popwin = document.getElementById("popout");
aorder.addEventListener('click', function(){
    if (order_summary.innerText == ""){
        alert("please select your order first or show it to reiew and confrim then click apply");
        return;
    }
    popwin.style.display = "flex";
})

let deliver= document.getElementById("delivry");
let loc =document.getElementsByClassName("location")[0];
let here= document.getElementById("here");
let take= document.getElementById("takeaway");
deliver.addEventListener('change', function(){
    loc.style.display = "flex";
})
here.addEventListener('click', function(){
    loc.style.display = "none";
})
take.addEventListener('click', function(){
    loc.style.display = "none";
})

let cancel = document.getElementsByClassName("cancel1")[0];
cancel.addEventListener('click', function(){
    popwin.style.display = "none";
    order_summary.innerText = "";
})

let count=1;
let conferm = document.getElementById("con");
let ordered = document.getElementsByClassName("ordered234")[0];
let shownh = document.getElementsByClassName("shownh")[0];
let min=0;
let sec=0;
let addinfo = document.getElementsByClassName("addition")[0];
let timer = document.getElementsByClassName("timer-value")[0];

// FIX: Declare timerInterval here so the cancel button at the bottom can see it
let timerInterval; 

conferm.addEventListener('click', function(){
    popwin.style.display = "none";
    
    // FIX: Clear the old timer before starting a new one
    clearInterval(timerInterval); 
    
    count++;
    ordered.style.display = "flex";
    shownh.innerText = "your order code is: " + count;
    if (deliver.checked){
        addinfo.innerText = "delivry titel: " + loc.value + "\n" + "order: " + order_summary.innerText; 
        min=15;
        // FIX: removed "let" so it uses the globally declared variable
        timerInterval = setInterval(function(){
            sec--;
            if (sec<0 && min>0){
                sec=59;
                min--;
            }
            timer.innerText = "your order will be done in " + min + ":" + String(sec).padStart(2,'0');
            if (min<=0 && sec<=0){
                timer.innerText = "your order is done";
                clearInterval(timerInterval);
            }
        
        }, 1000);
        
    }
    if (take.checked){
        addinfo.innerText = "you will take a food away " + "\n" + "order: " + order_summary.innerText;
        min=5;
        // FIX: removed "let"
        timerInterval = setInterval(function(){
            sec--;
            if (sec<0 && min>0){
                sec=59;
                min--;
            }
            timer.innerText = "your order will be done in " + min + ":" + String(sec).padStart(2,'0');
            if (min<=0 && sec<=0){
                timer.innerText = "your order is done";
                clearInterval(timerInterval);
            }
        
        }, 1000);
        
    }

    if (here.checked){
        addinfo.innerText = "you will have food here " + "\n" + "order: " + order_summary.innerText;
        min=5;
        timerInterval = setInterval(function(){
            sec--;
            if (sec<0 && min>0){
                sec=59;
                min--;
            }
            timer.innerText = "your order will be done in " + min + ":" + String(sec).padStart(2,'0');
            if (min<=0 && sec<=0){
                timer.innerText = "your order is done";
                clearInterval(timerInterval);
            }
        
        }, 1000);
        
    }
    order_summary.innerText = "";
    
})

let cancel2 = document.getElementsByClassName("cancel2")[0];
cancel2.addEventListener('click', function(){
    ordered.style.display = "none";
    clearInterval(timerInterval); 
})