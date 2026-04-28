import Typography from "@mui/material/Typography";
const Celsius = 273.15;

export const Temp = ({ t, temperature }) => {
  return (
    <>
      <div className="Temp_icon">
        <Typography sx={{ textAlign: "right" }} variant="h1" component="h2">
          {Math.round(temperature.number - Celsius)}
        </Typography>
        <img
          alt="img"
          src={`https://openweathermap.org/img/wn/${temperature.icon}@2x.png`}
        />
      </div>
      <Typography className="" variant="h6">
        {t(temperature.description)}
      </Typography>
      <div className="Valuse">
        <h5>
          {t("Max")}:{Math.round(temperature.max - Celsius)}
        </h5>
        <h5>|</h5>
        <h5>
          {t("Min")}: {Math.round(temperature.min - Celsius)}
        </h5>
      </div>
    </>
  );
};
