window.onload= function() {
    var count=0
    var prix=0
    increment=()=>{   
    count++
    prix=count*0.8
    document.getElementById("initiale1").innerHTML=count
    document.getElementById("total1").innerHTML='dt'+prix.toFixed(1)
    totalprice()
    }
     decrement=()=>{
         if (prix<=0) return
         count--
         prix=count*0.8
         document.getElementById("initiale1").innerHTML=count
         document.getElementById("total1").innerHTML='dt'+prix.toFixed(1)
         totalprice()
     }
    
     var count1=0
     var prix1=0
     increment1=()=>{
         count1++
         prix1=count1*1.5
         document.getElementById("initiale2").innerHTML=count1
         document.getElementById("total2").innerHTML='dt'+prix1.toFixed(1)
         totalprice()
     }
     decrement1=()=>{
         if(prix1<=0) return
        count1--
        prix1=count1*1.5
        document.getElementById("initiale2").innerHTML=count1
        document.getElementById("total2").innerHTML='dt'+prix1.toFixed(1)
        totalprice()
    }
    var count2=0
    var prix2=0
    increment2=()=>{
        count2++
        prix2=1*count2
        document.getElementById("initiale3").innerHTML=count2
        document.getElementById("total3").innerHTML="dt"+prix2.toFixed(1)
        totalprice()
    }
    decrement2=()=>{
        if(prix2<=0) return
       count2--
       prix2=count2*1
       document.getElementById("initiale3").innerHTML=count2
       document.getElementById("total3").innerHTML='dt'+prix2.toFixed(1)
       totalprice()
    }
    
    var count3=0
    var prix3=0
    increment3=()=>{
        count3++
        prix3=1*count3
        document.getElementById("initiale4").innerHTML=count3
        document.getElementById("total4").innerHTML="dt"+prix3.toFixed(1)
        totalprice()
    }
    decrement3=()=>{
        if(prix3<=0) return
       count3--
       prix3=count3*1
       document.getElementById("initiale4").innerHTML=count3
       document.getElementById("total4").innerHTML='dt'+prix3.toFixed(1)
       totalprice()
    }
    
    var count4=0
    var prix4=0
    increment4=()=>{
        count4++
        prix4=count4*1.2
        document.getElementById("initiale5").innerHTML=count4
        document.getElementById("total5").innerHTML="dt"+prix4.toFixed(1)
        totalprice()
    }
    decrement4=()=>{
        if(prix4<=0) return
       count4--
       prix4=count4*1.2
       document.getElementById("initiale5").innerHTML=count4
       document.getElementById("total5").innerHTML='dt'+prix4.toFixed(1)
       totalprice()
    }
    
    var count5=0
    var prix5=0
    increment5=()=>{
        count5++
        prix5=count5*1.2
        document.getElementById("initiale6").innerHTML=count5
        document.getElementById("total6").innerHTML="dt"+prix5.toFixed(1)
        totalprice()
    }
    decrement5=()=>{
        if(prix5<=0) return
       count5--
       prix5=count5*1.2
       document.getElementById("initiale6").innerHTML=count5
       document.getElementById("total6").innerHTML='dt'+prix5.toFixed(1)
       totalprice()
    }
    
    var count6=0
    var prix6=0
    increment6=()=>{
        count6++
        prix6=count6*0.75
        document.getElementById("initiale7").innerHTML=count6
        document.getElementById("total7").innerHTML="dt"+prix6.toFixed(2)
        totalprice()
    }
    decrement6=()=>{
        if(prix6<=0) return
       count6--
       prix6=count6*0.75
       document.getElementById("initiale7").innerHTML=count6
       document.getElementById("total7").innerHTML='dt'+prix6.toFixed(2)
       totalprice()
    }
    
    var count7=0
    var prix7=0
    increment7=()=>{
        count7++
        prix7=count7*2.5
        document.getElementById("initiale8").innerHTML=count7
        document.getElementById("total8").innerHTML="dt"+prix7.toFixed(1)
        totalprice()
    }
    decrement7=()=>{
        if(prix7<=0) return
       count7--
       prix7=count7*2.5
       document.getElementById("initiale8").innerHTML=count7
       document.getElementById("total8").innerHTML='dt'+prix7.toFixed(1)
       totalprice()
    }
    
    var count8=0
    var prix8=0
    increment8=()=>{
        count8++
        prix8=count8*1
        document.getElementById("initiale9").innerHTML=count8
        document.getElementById("total9").innerHTML="dt"+prix8.toFixed(1)
        totalprice()
    }
    decrement8=()=>{
        if(prix8<=0) return
       count8--
       prix8=count8*1
       document.getElementById("initiale9").innerHTML=count8
       document.getElementById("total9").innerHTML='dt'+prix8.toFixed(1)
       totalprice()
    }
    
    totalprice=()=>{
       var totalprice=0
       var tot1=document.getElementById('total1').innerHTML
       var tot2=document.getElementById('total2').innerHTML
       var tot3=document.getElementById('total3').innerHTML
       var tot4=document.getElementById('total4').innerHTML
       var tot5=document.getElementById('total5').innerHTML
       var tot6=document.getElementById('total6').innerHTML
       var tot7=document.getElementById('total7').innerHTML
       var tot8=document.getElementById('total8').innerHTML
       var tot9=document.getElementById('total9').innerHTML
        totalprice=parseFloat(tot1.replace('dt', ''), 10)+parseFloat(tot2.replace('dt', ''), 10)+parseFloat(tot3.replace('dt', ''), 10)+parseFloat(tot4.replace('dt', ''), 10)+parseFloat(tot5.replace('dt', ''), 10)+parseFloat(tot6.replace('dt', ''), 10)+parseFloat(tot7.replace('dt', ''), 10)+parseFloat(tot8.replace('dt', ''), 10)+parseFloat(tot9.replace('dt', ''), 10)
       document.getElementById("tots").innerHTML=totalprice.toFixed(2) + " dt"
    }
    
    // var tab=[]
    // cherchename=()=>{
    // for (let i=0;i<=length.names;i++)
    // if cherche==names return true
    // else false
    
    
    // var card=document.querySelectorAll('.despromo')
    // for(let i=0; i<card.length;i++){
    //     var names = document.querySelectorAll('div .name') //tab asemi produit
    //     var cherche = document.querySelector('.form-control')
    //     cherche.addEventListener('keyup', compare)
    //     function compare(e){
    //         var x= e.target.value
    //         names.forEach(name => { 
    //             var newName = name.innerHTML.replace(':', '')
    //         if(newName === x){ card[i].style.display= "block"}
    //         else { card[i].style.display= "none"}
    //         });
        
    //     }
    
    // }
    
    }
    