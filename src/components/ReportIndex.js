import { Link } from "react-router-dom";
import ReportIndexItem from "./ReportIndexItem";
import { useSelector, useDispatch } from "react-redux";
import { resetDataAction } from "../store/reports";

const ReportIndex = () => {
  const allReports = useSelector((state) => state.reports);
  const reports = [];
  let dispatch = useDispatch();
  for (let rep of Object.keys(allReports)) reports.push(allReports[rep]);
  const resetData = (e) => {
    e.preventDefault();
    console.log("RESET");
    dispatch(resetDataAction());
  };

  return (
    <section>
      <ul>
        {reports.map((report) => (
          <ReportIndexItem report={report} key={report.id} />
        ))}
      </ul>
      <Link to="/reports/new">New Report</Link>
      <button onClick={resetData}>Reset Data</button>
    </section>
  );
};

export default ReportIndex;
