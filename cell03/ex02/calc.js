setInterval(() => alert('Please, use me...'), 30000);

const isNonNegInt = s => /^\d+$/.test(s);

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const aStr = document.getElementById("left").value.trim();
  const bStr = document.getElementById("right").value.trim();
  const op   = document.getElementById("op").value;

  if (!isNonNegInt(aStr) || !isNonNegInt(bStr)) {
    alert('Error :(');
    console.log('Error :(');
    return;
  }

  const a = Number(aStr), b = Number(bStr);

  if ((op === '/' || op === '%') && b === 0) {
    alert("It's over 9000!");
    console.log("It's over 9000!");
    return;
  }

  let result;
  switch(op){
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = a / b; break;
    case '%': result = a % b; break;
  }

  alert(String(result));
  console.log(result);
});
