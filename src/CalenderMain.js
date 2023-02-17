import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useRef,
} from "react";
import CheckBox from "devextreme-react/check-box";
import SelectBox from "devextreme-react/select-box";
import DateBox from "devextreme-react/date-box";
import Calendar from "devextreme-react/calendar";
import CustomCell, { isWeekend } from "./CustomCell.js";
import Button from "devextreme-react/button";
import { Link } from "react-router-dom";
import { Popup } from "devextreme-react/popup";
import notify from "devextreme/ui/notify";

const zoomLevels = ["month", "year", "decade", "century"];
const weekNumberRules = ["auto", "firstDay", "firstFourDays", "fullWeek"];
const weekDays = [
  { id: 0, text: "Sunday" },
  { id: 1, text: "Monday" },
  { id: 2, text: "Tuesday" },
  { id: 3, text: "Wednesday" },
  { id: 4, text: "Thursday" },
  { id: 5, text: "Friday" },
  { id: 6, text: "Saturday" },
];

export default function CalendarMain() {
  const [minDateValue, setMinDateValue] = React.useState(null);
  const [maxDateValue, setMaxDateValue] = React.useState(null);
  const [weekendDisabled, setWeekendDisabled] = React.useState(null);
  const [firstDay, setFirstDay] = React.useState(0);
  const [weekNumberRule, setWeekNumberRule] = React.useState("auto");
  const [showWeekNumbers, setShowWeekNumbers] = React.useState(false);
  const [currentValue, setCurrentValue] = React.useState(new Date());
  const [useCellTemplate, setUseCellTemplate] = React.useState(null);
  const [disabled, setDisabled] = React.useState(false);
  const [zoomLevel, setZoomLevel] = React.useState("month");

  const [isPopupVisible, setPopupVisibility] = useState(false);
  const togglePopup = () => {
    //setPopupVisibility(false);
    setPopupVisibility(!isPopupVisible);
  };

  const onCurrentValueChange = React.useCallback(
    ({ value }) => {
      setCurrentValue(value);
    },
    [setCurrentValue]
  );
  const onZoomLevelChange = React.useCallback(
    ({ value }) => {
      setZoomLevel(value);
    },
    [setZoomLevel]
  );

  const isDateDisabled = React.useCallback(
    ({ view, date }) => view === "month" && isWeekend(date),
    []
  );

  const onOptionChange = React.useCallback(
    (e) => {
      if (e.name === "zoomLevel") {
        onZoomLevelChange(e);
      }
    },
    [onZoomLevelChange]
  );
  const scheduleTime = async (e) => {
    setPopupVisibility(true);
    // e.preventDefault();
    if (1) {
      togglePopup();
    } else {
      notify(
        {
          message:
            "Thanks for Scheduling a Meeting with us. You will receive a mail Shortly.",
          width: 600,
          shading: true,
          position: "center",
        },
        "success",
        1400
      );
      // refreshPage();
    }
  };

  return (
    <div
      style={{
        marginRight: "25px",
        marginLeft: "25px",
        marginTop: "20px",
        marginBottom: "40px",
      }}
    >
      <h3
        style={{
          fontSize: "20px",
          fontWeight: 700,
          marginTop: "25px",
          marginBottom: "22px",
        }}
      >
        Select a Date
      </h3>
      <Calendar
        value={currentValue}
        onValueChanged={onCurrentValueChange}
        onOptionChanged={onOptionChange}
        min={minDateValue}
        max={maxDateValue}
        disabledDates={weekendDisabled ? isDateDisabled : null}
        firstDayOfWeek={firstDay}
        weekNumberRule={weekNumberRule}
        showWeekNumbers={showWeekNumbers}
        disabled={disabled}
        zoomLevel={zoomLevel}
        cellRender={useCellTemplate ? CustomCell : null}
        width="auto"
      ></Calendar>
      <Popup
        visible={isPopupVisible}
        hideOnOutsideClick={true}
        onHiding={togglePopup}
        showTitle={true}
        title="Information"
        width={500}
        height={500}
        resizeEnabled={true}
      />

      <div
        style={{
          marginTop: "25px",
          marginBottom: "22px",
        }}
      >
        <Link to="./scheduleTime" style={{ textDecoration: "none" }}>
          <Button
            width={160}
            height={40}
            text="Confirm"
            type="default"
            stylingMode="contained"
            onClick={togglePopup}
          ></Button>
        </Link>
      </div>
    </div>
  );
}
