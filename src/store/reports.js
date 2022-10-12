import initialReports from "../data/initial-reports.json";

const normalizeData = (data) => {
  const dataObj = {};
  initialReports.forEach((report) => {
    dataObj[report.id] = report;
  });

  console.log("INITIAL DATA ", dataObj);

  return dataObj;
};

const initialState = { reports: normalizeData(initialReports) };

const reportsReducer = (state = initialState, action) => {
  console.log("setting report state");
  return state;
};

export default reportsReducer;
