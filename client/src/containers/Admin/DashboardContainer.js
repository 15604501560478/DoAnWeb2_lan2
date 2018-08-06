import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { logoutUser } from "../../actions/auth";
import Dashboard from "../../components/Admin/Dashboard";

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.isAuthenticated,
		token: state.auth.token,
		errorMessage: state.auth.errorMessage,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		logoutUser: () => dispatch(logoutUser()),
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(Dashboard)
);
