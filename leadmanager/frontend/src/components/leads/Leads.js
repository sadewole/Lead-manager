import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLeads, deleteLead } from '../../store/actions/leads';

const Leads = () => {
  const dispatch = useDispatch();
  const { leads } = useSelector((state) => state.leads);

  useEffect(() => {
    dispatch(getLeads());
  }, []);

  return (
    <>
      <h2>Leads</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.message}</td>
              <td>
                <button
                  className='btn btn-danger btn-sm'
                  onClick={() => dispatch(deleteLead(lead.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Leads;
