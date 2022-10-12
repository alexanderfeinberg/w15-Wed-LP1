import initialReports from "../data/initial-reports.json";

const DELETE_REPORT = "report/deleteReport";

const normalizeData = (data) => {
  const dataObj = {};
  initialReports.forEach((report) => {
    dataObj[report.id] = report;
  });

  //   console.log("INITIAL DATA ", dataObj);

  return dataObj;
};

export const removeReport = (report) => {
  return { type: DELETE_REPORT, report: report };
};

const initialState = normalizeData(initialReports);

const reportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_REPORT:
      const newState = {};
      for (let key of Object.keys(state)) {
        if (state[key].id !== action.report.id) {
          newState[key] = state[key];
        }
      }
      return newState;
  }
  return state;
};

export default reportsReducer;
