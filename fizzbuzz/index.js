let answer = prompt("Please enter a number you would like to FizzBuzz up to");

let i = 1;

for (i; i <= answer; i ++) {
  if (i % 3 == 0 && i % 5 == 0)
    document.write("FizzBuzz<br>")
  else if (i % 3 == 0)
    document.write("Fizz<br>")
  else if (i % 5 == 0)
    document.write("Buzz<br>")
  else
    document.write(i + "<br>")
}
