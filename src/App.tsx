import React, {useState} from "react";
import Title from './components/Title'
import './App.css';
import Form from "./components/Form";
import Result from "./components/Result";

type ResultStateType = {
  country: string,
  cityName: string,
  temperature: string,
  conditionalText: string,
  icon: string
}

const App = () => {
  const [city, setCity] = useState<string>("")
  const [result, setResult] = useState<ResultStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionalText: "",
    icon: ""
  })

  const getWeather = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    const url = `http://api.weatherapi.com/v1/current.json?key=45f827b99a664c2c92d14853220708&q=${city}&aqi=no`
    const response = await fetch(url)
    const data = await response.json()
    await setResult({
      country: data.location.country,
      cityName: data.location.name,
      temperature: data.current.temp_c,
      conditionalText: data.current.condition.text,
      icon: data.current.condition.icon
    })
  }

  return (
    <div className="App">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Result result={result}/>
    </div>
  );
}

export default App;
