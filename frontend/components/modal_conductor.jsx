import React from 'react';

import CreateDirectMessageModal from './ExportDataModal.jsx';
import CreateChannelModal from './SignInModal.jsx';

const ModalConductor = props => {
  switch (props.currentModal) {
    case 'CREATE_CHANNEL':
      return <CreateChannelModal {...props}/>;

    case 'CREATE_DIRECT_MESSAGE':
      return <CreateDirectMessage {...props}/>;

    default:
      return null;
  }
};

export default ModalConductor;
