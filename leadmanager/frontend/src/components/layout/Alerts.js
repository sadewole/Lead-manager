import React, { Fragment, useEffect } from 'react';
import { withAlert } from 'react-alert';
import { useSelector } from 'react-redux';

const Alerts = ({ alert }) => {
  const { msg } = useSelector((state) => state.errors);
  const message = useSelector((state) => state.messages);

  useEffect(() => {
    // error alert
    if (msg && msg.name) alert.error(`Name: ${msg.name.join()}`);
    if (msg && msg.email) alert.error(`Email: ${msg.email.join()}`);
    if (msg && msg.non_field_errors) alert.error(msg.non_field_errors);

    // message alert
    if (message && message.deleteLead) alert.success(message.deleteLead);
    if (message && message.addLead) alert.success(message.addLead);
  }, [msg]);

  return <Fragment />;
};

export default withAlert()(Alerts);
