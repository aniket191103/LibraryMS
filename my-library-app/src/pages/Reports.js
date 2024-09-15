import React, { useState, useEffect } from 'react';
import { getReports } from '../utils/api';

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const data = await getReports();
        setReports(data);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };
    fetchReports();
  }, []);

  return (
    <div>
      <h1>Reports</h1>
      <table>
        <thead>
          <tr>
            <th>Report Name</th>
            <th>Description</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.name}</td>
              <td>{report.description}</td>
              <td>
                <a href={report.downloadUrl}>Download</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
