import Button from "@mui/material/Button";

export default function Translatebutton({ t, ToArabic }) {
  return (
    <div className="Translatebutton">
      <Button
        size="large"
        color="secondary"
        variant="contained"
        onClick={ToArabic}
      >
        {t("عربي")}{" "}
      </Button>
    </div>
  );
}
