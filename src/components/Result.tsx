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
  return (
    <div>
      {props.result.country && <div>{props.result.country}</div>}
      {props.result.cityName && <div>{props.result.cityName}</div>}
      {props.result.temperature && <div>{props.result.temperature} <span>°C</span></div>}
      {props.result.conditionalText &&
        <div>
          <img src={props.result.icon} alt="icon"/>
          <span>{props.result.conditionalText}</span>
        </div>
      }
    </div>
  )
}

export default Result
