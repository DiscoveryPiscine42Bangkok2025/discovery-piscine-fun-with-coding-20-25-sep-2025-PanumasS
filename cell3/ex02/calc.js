setInterval(() => alert('Please, use me...'), 30000);

const isNonNegInt = s => /^\d+$/.test(s);

$("#form").on("submit", function (e) {
  e.preventDefault();

  const aStr = $("#left").val().trim();
  const bStr = $("#right").val().trim();
  const op   = $("#op").val();

  if (!isNonNegInt(aStr) || !isNonNegInt(bStr)) {
    alert('Error :('); console.log('Error :('); return;
  }

  const a = Number(aStr), b = Number(bStr);

  if ((op === '/' || op === '%') && b === 0) {
    alert("It's over 9000!"); console.log("It's over 9000!"); return;
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
