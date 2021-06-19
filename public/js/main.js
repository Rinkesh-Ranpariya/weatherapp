const submitBtn=document.getElementById("submitBtn");
const CityName=document.getElementById("CityName");
let city_name=document.getElementById("city_name");
let acTemp=document.getElementById("acTemp");
let lol=document.getElementById("lol");
let datahide=document.querySelector('.middle_layer');
// let hi=document.getElementById('hi');

const getinfo =async (e)=>{
    e.preventDefault();
    
    let sdata=CityName.value;

    if(sdata===""){
        city_name.innerText='Please Enter City Name';
        // datahide.classList.add('data_hide');
    }
    else{
        try{
            
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${sdata}&units=metric&appid=7bc2cda0fa50d0b20ffe2ef0d2426e4a`;
            let res=await fetch(url);
            let response=await res.json();

            const city=response.name;
            const country=response.sys.country;
            const temp=response.main.temp;
            const tempstatus=response.weather[0].main;
            // let tempstatus='Rain';
            // console.log(tempstatus)
            // const temp_min=response.main.temp_min;
            // const temp_max=response.main.temp_max;
            city_name.innerText=`${city} ${country}`;
            acTemp.innerText=`${temp}`;
            
            if(tempstatus=='Clouds'){
                lol.innerHTML=`<i class="fas fa-cloud"></i>`;
            }
            else if(tempstatus=='Rain')
            {
                lol.innerHTML=`<i class="fas fa-cloud-rain"></i>`;
            }
            else if(tempstatus=='Clear')
            {
                lol.innerHTML=`<i class="fas fa-sun"></i>`;
            }
            else{
                lol.innerHTML=`<i class="fas fa-cloud" aria-hidden="true"></i>`;
            }
            datahide.classList.remove('data_hide');
            // CityName.value='';
        }
        catch(err){
            city_name.innerText='Please Enter Proper City Name';
            // datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click',getinfo)



let day=document.getElementById('day');
let today_data=document.getElementById('today_data');
const time=()=>{

    const newdate=new Date();
    let days=newdate.getDay()
    let date=newdate.getDate()
    let month=newdate.getMonth()
    console.log(days)
    daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    day.innerText=daysInWeek[days];

    var monthsarray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    today_data.innerText=`${date} ${monthsarray[month]}`

}

time();

// 7bc2cda0fa50d0b20ffe2ef0d2426e4a
// api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid={API key}
// api.openweathermap.org/data/2.5/weather?q=surat&units=metric&appid=7bc2cda0fa50d0b20ffe2ef0d2426e4a