import React from "react";

type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void
}


const Form = ({ setCity, getWeather }: FormPropsType) => {

  return (
    <form onSubmit={getWeather}>
      <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)}/>
    </form>
  )
}

export default Form
