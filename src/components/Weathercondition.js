const WeatherWithImages = ({ condition = { text: "Unknown", icon: "" } }) => {
    const renderWeatherImage = () => {
      // text утгыг аюулгүй байдлаар авах
      const text = condition.text ? condition.text.toLowerCase() : "unknown";
  
      // Snow нөхцөл
      if (text.includes("snow")) {
        return (
          <img
            src="/img/Day Snow.png"
            alt="Snow"
            className="rounded-lg shadow-md"
          />
        );
      }
  
      // Rain нөхцөл
      if (text.includes("rain")) {
        return (
          <img
            src="/img/Day Rain.png"
            alt="Rain"
            className="rounded-lg shadow-md"
          />
        );
      }
  
      // Sunny нөхцөл
      if (text.includes("sunny") || text.includes("clear")) {
        return (
          <img
            src="/img/sun.png"
            alt="Sunny"
            className="rounded-lg shadow-md"
          />
        );
      }
  
      // Partly Cloudy нөхцөл
      if (text.includes("partly cloudy")) {
        return (
          <img
            src="/img/Day Clouds.png"
            alt="Partly Cloudy"
            className="rounded-lg shadow-md"
          />
        );
      }
  
      // Анхдагч зураг
      return (
        <img
          src={condition.icon ? `https:${condition.icon}` : "/img/sun.png"}
          alt={condition.text}
          className="rounded-lg shadow-md"
        />
      );
    };
  
    return (
      <div>
        {renderWeatherImage()}
      </div>
    );
  };
  
  export default WeatherWithImages;