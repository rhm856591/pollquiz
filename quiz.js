function check(){
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    if(q1=="36"){c++
        document.write("Question No.1 is correct")
        document.write("<br>");
    }
    else if(q1!="36"){
        document.write("Question No.1 is wrong")
        document.write("<br>");
    }
    if(q2=="49950"){c++
        document.write("Question No.2 is correct")
        document.write("<br>");
    }
    else if(q2!="49950"){
        document.write("Question 2 is wrong")
        document.write("<br>");
    }
    if(q3=="Rs. 204"){c++
        document.write("Question No.3 is correct")
        document.write("<br>");
    }
    else if(q3!="Rs. 204"){
        document.write("Question 3 is wrong")
        document.write("<br>");
    }
    if(q4=="Rs. 5777.7"){c++
        document.write("Question No.4 is correct")
        document.write("<br>");
    }
    else if(q4!="Rs. 5777.7"){
        document.write("Question 4 is wrong")
        document.write("<br>");
    }
    if(q5=="45 years"){c++
        document.write("Question No.5 is correct")
        document.write("<br>");
    }
    else if(q5!="45 years"){
        document.write("Question 5 is wrong")
        document.write("<br>");

    }
    document.write("Your Marks is = ", c);
}
    
function toggleHide() {
    let btn =document.getElementById('btn');
    let pr= document.getElementById('para');
    // para.style.display = 'none';
    if(para.style.display != 'none'){
    
           
            para.style.display = 'none';
    }
    else{
        para.style.display ='block';
    }
  }
