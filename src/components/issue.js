import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Issue = ({ number, state, title, user, closed_at, updated_at }) => (
  <li
      className="list-group-item"
      key={number}>
      	<div>
			<i className={state === 'open' ? 'fa fa-exclamation-circle text-danger':'fa fa-check text-success'}></i>
			<a className="issue-title" href={`/issue/${number}`}>&nbsp;&nbsp;{title}</a>
		</div>              
		<span className="issue-desc">
			#{number} {state ==='open' ? 'opened':'closed'} {moment(state === 'open' ? updated_at : closed_at).fromNow()} by {user.login}
		</span>
    </li>
)

Issue.propTypes = {
	number: PropTypes.number.isRequired,
	state: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	updated_at: PropTypes.oneOfType([
		PropTypes.string.isRequired,
		PropTypes.instanceOf(Date).isRequired
	]),
	closed_at: PropTypes.oneOfType([
		PropTypes.string.isRequired,
		PropTypes.instanceOf(Date).isRequired
	]),
	user: PropTypes.object.isRequired
}

export default Issue