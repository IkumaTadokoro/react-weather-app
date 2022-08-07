type ResultPropsType = {
  result: {
    country: string,
    cityName: string,
    temperature: string,
    conditionalText: string,
    icon: string
  }
}

const Result = (props: ResultPropsType) => {
  const { country, cityName, temperature, conditionalText, icon } = props.result

  return (
    <>
      {country && <div>{country}</div>}
      {cityName && <div>{cityName}</div>}
      {temperature && <div>{temperature} <span>°C</span></div>}
      {conditionalText &&
        <div>
          <img src={icon} alt="icon"/>
          <span>{conditionalText}</span>
        </div>
      }
    </>
  )
}

export default Result
