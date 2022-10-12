import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeReport } from "../store/reports";

const ReportIndexItem = ({ report }) => {
  let dispatch = useDispatch();
  const deleteReport = (e) => {
    e.preventDefault();
    console.log(report);
    dispatch(removeReport(report));
  };

  return (
    <li key={report.id}>
      <Link to={`/reports/${report.id}`}>Report #{report.id}</Link>
      <Link to={`/reports/${report.id}/edit`}>Edit</Link>
      <button onClick={deleteReport}>Delete</button>
    </li>
  );
};

export default ReportIndexItem;
