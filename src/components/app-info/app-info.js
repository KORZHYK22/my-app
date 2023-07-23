import "./app-info.css";

const AppInfo = ({ increased, employees }) => {
  return (
    <div className="app-info">
      <h1> Accounting of employees in the company </h1>
      <h2>Total number of employees: {employees}</h2>
      <h3>Bonus will receive: {increased}</h3>
    </div>
  );
};

export default AppInfo;
