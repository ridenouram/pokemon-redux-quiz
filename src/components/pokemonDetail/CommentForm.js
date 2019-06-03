import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createComment } from '../../actions/commentActions';

export default class CommentForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
  };

  state = {
    comment: '',
    isbn: this.props.id
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.id, this.state.comment);
    this.setState({ comment: '' });
  }

  updateComment = ({ target }) => {
    this.setState({ comment: target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.comment} onChange={this.updateComment} />
        <button>Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit(isbn, comment) {
    dispatch(createComment(isbn, comment));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CommentForm);
