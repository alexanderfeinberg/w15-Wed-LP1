import { Link } from "react-router-dom";
import ReportIndexItem from "./ReportIndexItem";
import { useSelector } from "react-redux";

const ReportIndex = () => {
  const allReports = useSelector((state) => state.reports);
  const reports = [];
  for (let rep of Object.keys(allReports)) reports.push(allReports[rep]);
  const resetData = (e) => {
    e.preventDefault();
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
