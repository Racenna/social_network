import { compose } from 'redux';
import { connect } from 'react-redux';
import { sendMessage } from '../../redux/dialogs_reducer/dialogsReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsData,
  };
};

export default compose(
  connect(mapStateToProps, {
    sendMessage,
  }),
  withAuthRedirect
)(Dialogs);
