import React, { useState } from 'react';
import Layout from '../../components/Layout';
import './Staff.css';

const Staff = ({ isPropertiesShrunk }) => {
  const [staffList, setStaffList] = useState([
    { id: 1, companyName: 'Company A', email: 'example1@company.com', position: 'Manager' },
    { id: 2, companyName: 'Company B', email: 'example2@company.com', position: 'Developer' },
    { id: 3, companyName: 'Company C', email: 'example3@company.com', position: 'Designer' },
  ]);

  const handleAddStaff = () => {
    const newStaff = {
      id: staffList.length + 1,
      companyName: `Company ${String.fromCharCode(65 + staffList.length)}`,
      email: `example${staffList.length + 1}@company.com`,
      position: 'New Position',
    };
    setStaffList([...staffList, newStaff]);
  };

  const handleDeleteStaff = (id) => {
    setStaffList(staffList.filter((staff) => staff.id !== id));
  };

  return (
    <Layout>
      <div className={`staff ${isPropertiesShrunk ? 'staff-expanded' : ''}`}>
        <h3>Staff List</h3>
        <button className="add-staff-button" onClick={handleAddStaff}>
          + Add Staff
        </button>

        {/* Staff Details Table */}
        <div className="staff-header">
          <div>ID</div>
          <div>Company Name</div>
          <div>Email</div>
          <div>Position</div>
          <div>Actions</div>
        </div>

        <div className="staff-rows">
          {staffList.map((staff) => (
            <div key={staff.id} className="staff-row">
              <div>{staff.id}</div>
              <div>{staff.companyName}</div>
              <div>{staff.email}</div>
              <div>{staff.position}</div>
              <div>
                <button
                  className="action-button delete-button"
                  onClick={() => handleDeleteStaff(staff.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Staff;
