const WeatherWithImages = ({ condition } ) => {
  if (condition === undefined) return;

  // Snow нөхцөл
  if (condition.toLowerCase().includes("snow")) {
    return (
      <img
        src="/img/Day Snow.png"
        alt="Snow"
      />
    );
  }

  // Rain нөхцөл
  else if (condition.toLowerCase().includes("rain")) {
    return (
      <img
        src="/img/Day Rain.png"
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
      <img src="/img/sun.png" alt="Sun" />
    );
  }

  // Partly Cloudy нөхцөл
  else if (condition.toLowerCase().includes("partly cloudy")) {
    return (
      <img
        src="/img/Day Clouds.png"
        alt="Partly Cloudy"
      />
    );
  } else if (condition.toLowerCase().includes("storm")) {
    return (
      <img
        src="/img/Day Storm.png"
        alt="Partly Cloudy"
      />
    );
  } else if (condition.toLowerCase().includes("wind")) {
    return (
      <img
        src="/img/Day Wind.png"
        alt="Partly Cloudy"
      />
    );
  }

  // Анхдагч зураг
  else
    return (
      <img
        src={"/img/sun.png"}
        alt={condition}
      />
    );
};

export default WeatherWithImages;
