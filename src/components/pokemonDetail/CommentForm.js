import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createComment } from '../../actions/commentActions';

class CommentForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
  };

  state = {
    comment: '',
    id: this.props.id
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('in handle submit. id: ', this.state.id);
    this.props.onSubmit(this.state.id, this.state.comment);
    this.setState({ comment: '' });
  }

  updateComment = ({ target }) => {
    this.setState({ comment: target.value });
  }

  render() {
    return (
      <>
      <h1>LEAVE A COMMENT</h1>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.comment} onChange={this.updateComment} />
        <button>Submit</button>
      </form>
      </>
    );
  }
}

// const mapStateToProps = (state, props) => ){

// }

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, comment) {
    console.log('in onSubmit. id: ', id);
    dispatch(createComment(id, comment));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CommentForm);
