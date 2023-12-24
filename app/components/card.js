"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import searching from "@/app/Assets/search.png";
import cloud from "@/app/Assets/cloud.png";
import humidity_img from "@/app/Assets/humidity.png";
import wind_img from "@/app/Assets/wind.png";
import axios from "axios";

function card() {
  const [city, setCity] = useState("Gorakhpur");
  const [humidity, setHumidity] = useState('45%');
  const [wind, setWind] = useState('16 km/hr');
  const [image, setImage] = useState();
  const [temperature, setTemp] = useState("20°C");
  const [description, setDescription] = useState("CLOUDY");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=1b0b12aabba563d30853239399db6a5d`;

  useEffect(() => {

    // console.log(process.env)
    const fetchWeather = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;
  
        let temp = data.main.feels_like;
        temp = ((temp - 32) * 5) / 9;
        temp = Math.floor(temp) + "°C";
        let city = "Gorakhpur";
        let humidity = data.main.humidity + "%";
  
        let wind = data.wind.speed + " km/h";
        let image = data.weather[0].icon;
        let description = data.weather[0].description;
        description = description.toUpperCase(0);


        // let image = 
  
        setDescription(description);
  
        setImage(image);
        setWind(wind);
        setHumidity(humidity);

        
  
        setCity(city);
        setTemp(temp);
      } catch (e) {
        console.log("No Internet Connection Detected!");
      }
    }; fetchWeather();
  }, []);
  const fetchWeather = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;

      let temp = data.main.feels_like;
      temp = ((temp - 32) * 5) / 9;
      temp = Math.floor(temp) + "°C";
      let city = data.name;
      let humidity = data.main.humidity + "%";

      let wind = data.wind.speed + " km/h";
      let image = data.weather[0].icon;
      let description = data.weather[0].description;
      description = description.toUpperCase(0);

      setDescription(description);

      setImage(image);
      setWind(wind);
      setHumidity(humidity);
      // console.log(temp);

      setCity(city);
      setTemp(temp);
    } catch (e) {
      console.log("No Internet Connection Detected!");
    }
  };
 

  return (
    <>
      <div className="  flex  justify-center  h-full">
        <div className=" w-[60vh] h-[90%] bg-white-500/100 backdrop-blur-[70px] backdrop-opacity-80  rounded-[20px] p-[20px] mt-[10%]">
          <div className="flex justify-center content-center gap-5 ">
            <div className=" content-center ">
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => setCity(e.target.value)}
                className="bg-white-100/500 rounded-[40px] h-[50px] my-4 py-3 pl-5 border-none text-black outline-none text-[20px] font-[400] "
              />
            </div>

            <div className="rounded-[60px] mt-3" onClick={fetchWeather}>
              <Image
                src={searching}
                alt="image"
                className="bg-white-100/500 colo w-[55px] h-[55px] rounded-[50px] cursor-pointer"
              />
            </div>
          </div>
          <div className=" w-auto h-auto flex content-center justify-center">
            <Image
              alt="image"
              // src={cloud} //
              src={`https://openweathermap.org/img/wn/${image}@2x.png`}
              width={200}
              height={200}
            />
          </div>
          <div>
            <div className="flex content-center justify-center text-[70px] font-extrabold">
              {temperature}
            </div>
            <div className="flex justify-center text-[20px] font-[10px] top-2">
              {description}
            </div>
            <div className="flex content-center justify-center text-[30px] font-extrabold">
              {city}
            </div>
            <div className="flex content-center justify-center mt-[20px] ">
              <Image
                src={humidity_img}
                alt="image"
                className="w-10 h-10 mt-2"
              />
              <div className="ml-4  text-white">
                <div className=" ml-4 font-bold  text-[30px]">{humidity}</div>
                <div className=" ml-4">Humidity</div>
              </div>

              <Image
                src={wind_img}
                alt="image"
                className="w-10 h-10 ml-10 mt-2"
              />
              <div className="ml-4  text-white">
                <div className=" ml-4 text-[30px] font-bold ">{wind}</div>
                <div className=" ml-4">Wind Speed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default card;
