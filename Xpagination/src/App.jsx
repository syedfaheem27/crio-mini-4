import { useEffect } from "react";
import { useState } from "react";
import Pagination from "./components/Pagination";

const API =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

const RESULTS_PER_PAGE = 10;

function App() {
  const [empData, setEmpData] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  let empPerPage = empData.filter((emp) => {
    const start = (currPage - 1) * RESULTS_PER_PAGE + 1;
    const end = currPage * RESULTS_PER_PAGE;

    return emp.id >= start && emp.id <= end;
  });

  const fetchEmployeeData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setEmpData(data);
    } catch (err) {
      console.log(err);
      alert("failed to fetch data");
    }
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  return (
    <>
      <header>
        <h1>Employee Data Table</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {empPerPage.map((emp) => {
            return (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        page={currPage}
        maxPage={Math.ceil(empData.length / RESULTS_PER_PAGE)}
        setPage={setCurrPage}
      />
    </>
  );
}

export default App;
