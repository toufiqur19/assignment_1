const validation = document.getElementById('dan');
function calculator() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let result = document.getElementById("outPut");
    let opr = document.getElementById("opr").value;
    
    if (opr == '+') {
      result.innerText = parseFloat(input1) + parseFloat(input2);
    }
    else if(opr == '-') {
      result.innerText = parseFloat(input1) -  parseFloat(input2);
    }
    else if(opr == '*') {
      result.innerText = parseFloat(input1) *  parseFloat(input2);
    }
    else if(opr == '/') {
      result.innerText = parseFloat(input1) /  parseFloat(input2);
    }

    // error
    function error(massage)
    {
      result.style.display = 'none';
      validation.style.display = 'block';
      validation.innerHTML= massage;
    }
    if(input1 == "") {
      error("enter your number 1")
    }
    
    else if(input2 == "") {
      error("enter your number 2")
    }
    else if(input1 == "" && input2 == "") {
      error("enter your both number")
    }

    else{
      result.style.display = 'block';
      validation.style.display = 'none';
    }
  
  }