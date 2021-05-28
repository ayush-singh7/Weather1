const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
//const data_hide = dcument.querySelector('.middle_layer');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal===""){
        city_name.innerText = `Please write the name before search`
        
        

    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=aa0a1866040d5ade972cca167c77a48b`;
             const response = await fetch(url);
             const data = await response.json();
             
             console.log(data);
             const arrData = [data];
             city_name.innerText = `${arrData[0].name}`,`${arrData[0].sys.country}`;
             //console.log(city_name)
             temp.innerText = arrData[0].main.temp;
             temp_status.innerText = arrData[0].weather[0].main;

            }catch{
                city_name.innerText = `Plz enter the correct city naem`
            }
        
    }
}

submitBtn.addEventListener('click', getInfo);