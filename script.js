const userTab=document.querySelector("[data-userweather]");
const searchTab=document.querySelector("[data-searchweather]");
const userContainer=document.querySelector(".weather-container");
const grantAccessContainer=document.querySelector(".grant-location");
const searchForm=document.querySelector("[data-searchForm]");
const loadingScreen=document.querySelector(".loadingScreen");
const userInfoContainer=document.querySelector(".show-weather");


 
// initially variables needed 
let OldTab=userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
OldTab.classList.add("current-tab");
getfromSessionStorage();
console.log("done1");


//switchTAB 
function switchTab(newTab){

    //if the clicked tab is not tbe current tab
    if(newTab!=OldTab){
        OldTab.classList.remove("current-tab");
        OldTab=newTab;
        OldTab.classList.add("current-tab");
    }

    // //if search container is invisible
    // if(!searchForm.classList.contains("active")){
    //     //make reamining tabs invisible
    //     userContainer.classList.remove("active");
    //     grantAccessContainer.classList.remove("active");
    //     //make it visible(search form visible)
    //     searchForm.classList.add("active");
    // }
    // //if search container is visible and we are on search tab 
    // else{
    //     //make search tab invisible
    //     searchForm.classList.remove("active");
    //     userContainer.classList.remove("active");
    //     //now I am at YourWeather(userWeather) Container
    //     //check for the grant access location that you already have coordinates or not
        
    // }
      // Hide everything first
        searchForm.classList.remove("active");
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");

        // If Search Weather tab clicked
        if(newTab === searchTab) {
            searchForm.classList.add("active");
        }
        else {
            // If Your Weather tab clicked
            getfromSessionStorage();
        }
}
userTab.addEventListener("click", () => {
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    switchTab(searchTab);
});


//USER WEATHER INFORMATION FUNCTIONING

//to check the storage of browser to hold coordinates or not
function getfromSessionStorage(){
    //func to get the coordinates of browser if it stored
    const localCoordinates=sessionStorage.getItem("user-coordinates");
    //if browser don't have local coordinates in their storage
    if(!localCoordinates){
        grantAccessContainer.classList.add("active");//gran access of your location
    }   
    else{
        //if browser have coords themn convert it into JSON and send to fetch the API
        const  coordinates=JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}
//function to fetch the weather Info of a coordinate using WEATHER API
async function  fetchUserWeatherInfo(coordinates){
    const {lat,lon}=coordinates;
    //MAKE CONTAINER INVISIBLE
    grantAccessContainer.classList.remove("active");
    //make loader visible
    loadingScreen.classList.add("active");
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const data=await response.json();
        //loader remove
        loadingScreen.classList.remove('active');

         //ADD THIS CHECK
        if(data.cod != 200){
            alert(data.message);
            return;
        }
        //display user weather info 
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(e){
        alert("unable to fetch API");
    }
}

function renderWeatherInfo(weatherInfo){
        const cityName=document.querySelector("[data-cityName]");
        const countryIcon=document.querySelector("[data-countryIcon]");
        const weatherdesc=document.querySelector("[data-weatherDesc]");
        const weatherIcon=document.querySelector("[data-weatherIcon]");
        const temp=document.querySelector("[data-temp]");
        const windspeed=document.querySelector("[data-windspeed]");
        const humidity=document.querySelector("[data-humidity]");
        const cloudiness=document.querySelector("[data-clouds]");

        // fetch the weather info form the json format converted from API format
        //elements are displayed in browser by passing them into their HTML container using OPTIONAL CHAINING
        cityName.innerText=weatherInfo?.name;
        countryIcon.src=`https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
        weatherdesc.innerText=weatherInfo?.weather?.[0]?.description;
        weatherIcon.src=`https://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
        temp.innerText=`${weatherInfo?.main?.temp} °C`;
        windspeed.innerText=`${weatherInfo?.wind?.speed}m/s`;
        humidity.innerText=`${weatherInfo?.main?.humidity}%`;
        cloudiness.innerText=`${weatherInfo?.clouds?.all}%`;
}

//browser ko coordinates lakr dega kaun??
//this func gives the coordinates of the user or searched city 
function getLocation(){
    if(navigator.geolocation){//This line is used in JavaScript to check whether the browser supports the Geolocation API.
        //find out the coord using geolocation API in which show position callback function is called to get the corrd of that location
        navigator.geolocation.getCurrentPosition(showPosition,function(error){
            console.log("Geolocation Error:", error.message);
        });
    }
}
function showPosition(position){
        const userCoordinates={
            lat:position.coords.latitude,//fetching the lat and lat
            lon:position.coords.longitude
        };
        //saving the coords(lat &lon)
        sessionStorage.setItem("user-coordinates",JSON.stringify(userCoordinates));
        fetchUserWeatherInfo(userCoordinates);
    }

const grantAccessBtn=document.querySelector("[data-grantAccessBtn]");
grantAccessBtn.addEventListener('click',getLocation);//. getlocation=>showposition=>fetchweatherInfo=>renderweaherInfo

//SEARCH TAB WEATHER INFO

const searchInput=document.querySelector("[data-searchInput]");
searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let cityname=searchInput.value;

    if(cityname==""){
        return;
    }
    else{
         fetchSearchWeatherInfo(cityname);
    }
});

async function fetchSearchWeatherInfo(city){
    loadingScreen.classList.add("active");
    grantAccessContainer.classList.remove("active");
    userInfoContainer.classList.remove("active");
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data=await response.json();

        loadingScreen.classList.remove("active");
         //ADD THIS CHECK
        if(data.cod != 200){
            alert(data.message);
            return;
        }

        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(e){
        alert("Unable to fetch data");
    }
}




