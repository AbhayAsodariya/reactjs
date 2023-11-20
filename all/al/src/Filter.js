import React, { useState } from 'react';

const initialData = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  // Add more data here
];

function FilterableTable() {
  const [data, setData] = useState(initialData);
  const [idFilter, setIdFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [emailFilter, setEmailFilter] = useState('');

  const handleIdFilterChange = (e) => {
    setIdFilter(e.target.value);
  };

  const handleNameFilterChange = (e) => {
    setNameFilter(e.target.value);
  };

  const handleEmailFilterChange = (e) => {
    setEmailFilter(e.target.value);
  };

  const filteredData = data.filter((item) => {
    return (
      item.id.toString().includes(idFilter) &&
      item.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      item.email.toLowerCase().includes(emailFilter.toLowerCase())
    );
  });

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Filter by ID"
          value={idFilter}
          onChange={handleIdFilterChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Filter by Name"
          value={nameFilter}
          onChange={handleNameFilterChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Filter by Email"
          value={emailFilter}
          onChange={handleEmailFilterChange}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FilterableTable;
