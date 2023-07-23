import "./employees-list.css";
import EmployeersListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map((item) => {
    const { id, ...itemPrors } = item;
    return (
      <EmployeersListItem
        key={id}
        {...itemPrors}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
