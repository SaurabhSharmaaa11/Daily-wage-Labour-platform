function Attendance() {
  return (
    <div>
      <h1>Attendance Management</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Worker Name</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Ramesh</td>
            <td>
              <select>
                <option>Present</option>
                <option>Absent</option>
                <option>Half Day</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>Suresh</td>
            <td>
              <select>
                <option>Present</option>
                <option>Absent</option>
                <option>Half Day</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;