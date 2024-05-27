let showInfoP = document.getElementById("showInfo");
let degree = document.getElementById("degree");
let timezone = document.getElementById("timezone");
let temp_description = document.getElementById("temperature-description");
let town = document.getElementById("town");
let showIcon = document.getElementById("showIcon");
window.addEventListener("load", () => {
  let longitude;
  let latitude;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      longitude = position.coords.longitude;
      latitude = position.coords.latitude;
      let obj;
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=d00f187ad9872149820cded6f00573ae`;
      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          obj = data;
          console.log(obj);
          timezone.innerText = obj.timezone;
          degree.innerText = obj.main.temp;
          temp_description.innerText = obj.weather[0].description;
          town.innerText = obj.name;
          showIcon.setAttribute(
            "src",
            `http://openweathermap.org/img/w/${obj.weather[0].icon}.png`
          );
        });
    });
  }
});
