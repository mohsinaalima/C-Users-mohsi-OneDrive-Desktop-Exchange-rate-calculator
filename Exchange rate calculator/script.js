const currencyEl_one = document.getElementById("currency-one");
const amount_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// fetch exchange rates and update the dom
function calculate() {
  const currencyEl_one = currencyEl_one.value;
  const currencyEl_two = currencyEl_two.value;
  fetch("https://api.exchangerate-api.com/v4/latest/${currency_one}")
    .then((res) => res.json)
    .then((data) => {
      // console.log(data);
      const rate = data.rates[currency_two];
      rateE1.innerText = "1 ${currency_one} = ${rate} ${currency_two}";

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}
// Event listeners
calculateEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
calculateEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();
