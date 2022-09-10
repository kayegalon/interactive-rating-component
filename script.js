const ratingCard = document.getElementById("rating");
const thankyouCard = document.getElementById("thank-you");
const rate1 = document.getElementById("one");
const rate2 = document.getElementById("two");
const rate3 = document.getElementById("three");
const rate4 = document.getElementById("four");
const rate5 = document.getElementById("five");
const resultText = document.getElementById("result");
const submitBtn = document.getElementById("submit");

thankyouCard.style.display = "none";

submitBtn.addEventListener("click", function() {
	ratingCard.style.display = "none";
	thankyouCard.style.display = "flex";
})

rate1.addEventListener("click", function() {
	clicked(rate1, rate2, rate3, rate4, rate5);
})

rate2.addEventListener("click", function() {
	clicked(rate2, rate1, rate3, rate4, rate5);
})

rate3.addEventListener("click", function() {
	clicked(rate3, rate1, rate2, rate4, rate5);
})

rate4.addEventListener("click", function() {
	clicked(rate4, rate1, rate2, rate3, rate5);
})

rate5.addEventListener("click", function() {
	clicked(rate5, rate1, rate2, rate3, rate4);
})

function clicked(rate, others1, others2, others3, others4) {
	rate.style.borderColor = "hsl(25, 97%, 53%)";
	rate.style.backgroundColor = "hsl(25, 97%, 53%)";
	rate.style.color = "hsl(0, 0%, 100%)";
	resultText.textContent = `You selected ${rate.textContent} out of 5`;
	
	const color = "hsl(213, 19%, 18%)";
	others1.style.borderColor = others2.style.borderColor = others3.style.borderColor = others4.style.borderColor = color;
	others1.style.backgroundColor = others2.style.backgroundColor = others3.style.backgroundColor = others4.style.backgroundColor = color;
	others1.style.color = others2.style.color = others3.style.color = others4.style.color = others5.style.color = color;
}
