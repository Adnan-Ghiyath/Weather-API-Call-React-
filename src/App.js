import "./App.css";
import "../src/components/Mycomponents.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
// Extermanel
import axios from "axios";
import moment from "moment";
import "moment/min/locales";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

// {* My components * }

import { CARD } from "../src/components/CARD";
import { CityandTime } from "../src/components/City_and_time";
import { Temp } from "../src/components/Temp";
import { Claoud } from "../src/components/imageIcon";
import Translatebutton from "../src/components/TransleatBTN";
moment.locale("en");
// {* == My components == * }

const Them = createTheme({
  typography: {
    fontFamily: "IBM",
  },
});
let cancelaxios = null;

function App() {
  const { t, i18n } = useTranslation();
  const [local, setlocal] = useState("ar");
  const [DateAndTime, setDateAndTime] = useState();
  const [temperature, settemp] = useState({
    number: null,
    description: "",
    min: null,
    max: null,
    icon: null,
  });
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);
  useEffect(() => {
    setDateAndTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
    i18n.changeLanguage("en");
    axios
      .get("http://iadnan-api.runasp.net/api/weather", {
        cancelToken: new axios.CancelToken((c) => {
          // مكتبة منها تجعلك تلغي اي طلب جديد من دون الحاجة لها عند فتح صغحة اخرى وتستخدم داحل
          //UseEffect.
          cancelaxios = c;
        }),
      })
      .then(function (response) {
        // handle success
        const min = response.data.main.temp_min;
        const temp = response.data.main.temp;
        const max = response.data.main.temp_max;
        const description = response.data.weather[0].description;
        const icon = response.data.weather[0].icon;
        settemp({
          number: temp,
          description: description,
          min: min,
          max: max,
          icon: icon,
        });
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    // .finally(function () {
    //   // always executed
    // });
    return () => {
      //هذه يقوم ب الغأء ال اي بي أي بسسب ان الريندر يجعل الطلب يتجدد تلقائي من دون حاجة له
      cancelaxios();
    };
  }, []);

  // === Events Handeler ======
  function ToArabic() {
    if (local == "en") {
      setlocal("ar");
      moment.locale(local);

      i18n.changeLanguage(local);
    } else {
      setlocal("en");
      i18n.changeLanguage(local);
      moment.locale(local);
    }
    setDateAndTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
  }
  // =============End Events Handeler ======
  return (
    <div className="App">
      <ThemeProvider theme={Them}>
        <Container maxWidth="sm">
          {/* Content Card */}
          <div className="CardCountener">
            {/* CARD */}
            <CARD local={local}>
              {/* CONTENT */}
              <div className="CONTENT">
                {/* CITY & TIME */}
                <CityandTime t={t} dateAndTime={DateAndTime} />
                {/* == CITY & TIME == */}
                <hr />

                {/* CONTAINER OF DEGREE + CLOUD ICON */}
                <div className="CONTENTofDEGREE">
                  {/* DEGREE & DESCRIPTION */}
                  <div>
                    {/* Temp */}
                    <Temp t={t} temperature={temperature} />
                    {/*======Temp */}
                  </div>

                  {/*== DEGREE & DESCRIPTION ==*/}
                  <Claoud />
                </div>
                {/* == CONTAINER OF DEGREE + CLOUD ICON == */}
              </div>
              {/* == CONTENT == */}
            </CARD>{" "}
            {/*=== CARD ===*/}
            {/* Translate button */}
            <Translatebutton t={t} ToArabic={ToArabic} />
            {/* == Translate button ==*/}
          </div>
          {/*=== Content Card ===*/}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
