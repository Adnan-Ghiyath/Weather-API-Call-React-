import Typography from "@mui/material/Typography";

export const CityandTime = ({ dateAndTime, t }) => {
  return (
    <div className="CityandTime">
      <Typography className="cityname" variant="h2" component="h2">
        {t("Dubai")}
      </Typography>
      <Typography className="DateText" variant="h5" component="h2">
        {dateAndTime}
      </Typography>
    </div>
  );
};
