import initialReports from "../data/initial-reports.json";

//Action Strings
const DELETE_REPORT = "report/deleteReport";
const LOAD_REPORT = "report/loadReport";
const ADD_REPORT = "report/addReport";
const RESET_DATA = "report/resetData";

///

//Action Functions
export const removeReport = (report) => {
  return { type: DELETE_REPORT, report: report };
};

export const loadReport = (report) => {
  return { type: LOAD_REPORT, report: report };
};

export const addReport = (report) => {
  return { type: ADD_REPORT, report: report };
};

export const resetDataAction = () => {
  return { type: RESET_DATA };
};

////

//Normalize Init data
const normalizeData = (data) => {
  const dataObj = {};
  initialReports.forEach((report) => {
    dataObj[report.id] = report;
  });

  //   console.log("INITIAL DATA ", dataObj);

  return dataObj;
};
////

const initialState = normalizeData(initialReports);

//REDUCER FUNCTION
const reportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_REPORT:
      let newState = { ...state };
      delete newState[action.report.id];
      return newState;
    case LOAD_REPORT:
      return { ...state };
    case ADD_REPORT:
      let report = action.report;
      return { ...state, [report.id]: report };
    case RESET_DATA:
      return normalizeData(initialReports);
  }

  return state;
};
///

export default reportsReducer;
