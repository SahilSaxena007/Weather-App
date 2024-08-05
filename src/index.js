import "./style.css";

apiKey = process.env.API_KEY;
console.log(apiKey);
let place;
const value = "United Arab Emirates";
const array = value.split(" ");
if (array.length > 0) {
  place = encodeURIComponent(array.join(" "));
} else if (array.length === 1) {
  place = encodeURIComponent(value);
} else {
  place = "London";
}
const button = document.querySelector(".add-button");
button.addEventListener("click", async () => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=metric&key=${apiKey}&contentType=json`,
      { mode: "cors" }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("error", error);
  }
});
