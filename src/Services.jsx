import { useEffect, useState } from "react";
import RegistrationForm from "./RegistrationForm";

export default function Services() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then(r => r.json())
      .then(d => setData(d));
  }, []);

  return (
    <div>
      <h2>Social Services</h2>
      <table border="1" width="70%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Service</th>
            <th>Category</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {data.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.service_name}</td>
              <td>{s.category}</td>
              <td>{s.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <RegistrationForm /> */}
    </div>
  );
}
