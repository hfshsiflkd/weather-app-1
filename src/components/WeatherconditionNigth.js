const WeatherWithImagesnigth = ({ condition } ) => {
    if (condition === undefined) return;
  
    // Snow нөхцөл
    if (condition.toLowerCase().includes("snow")) {
      return (
        <img
          src="/img/Night Snow.png"
          alt="Snow"
        />
      );
    }
  
    // Rain нөхцөл
    else if (condition.toLowerCase().includes("rain")) {
      return (
        <img
          src="/img/Night Rain.png"
          alt="Rain"
        />
      );
    }
  
    // Sunny нөхцөл
    else if (
      condition.toLowerCase().includes("sunny") ||
      condition.toLowerCase().includes("clear")
    ) {
      return (
        <img src="/img/moon.png" alt="Sun" />
      );
    }
  
    // Partly Cloudy нөхцөл
    else if (condition.toLowerCase().includes("partly cloudy")) {
      return (
        <img
          src="/img/Nigth Clouds.png"
          alt="Partly Cloudy"
        />
      );
    } else if (condition.toLowerCase().includes("storm")) {
      return (
        <img
          src="/img/Night Storm.png"
          alt="Partly Cloudy"
        />
      );
    } else if (condition.toLowerCase().includes("wind")) {
      return (
        <img
          src="/img/Night Wind.png"
          alt="Partly Cloudy"
        />
      );
    }
  
    // Анхдагч зураг
    else
      return (
        <img
          src={"/img/moon.png"}
          alt={condition}
        />
      );
  };
  
  export default WeatherWithImagesnigth;
  