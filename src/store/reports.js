import initialReports from "../data/initial-reports.json";

const normalizeData = (data) => {
  const dataObj = {};
  initialReports.forEach((report) => {
    dataObj[report.id] = report;
  });

  //   console.log("INITIAL DATA ", dataObj);

  return dataObj;
};

const initialState = normalizeData(initialReports);

const reportsReducer = (state = initialState, action) => {
  return state;
};

export default reportsReducer;
