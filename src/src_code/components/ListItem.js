import { Modal } from 'react-bootstrap';
import React from 'react';
import ButtonComponent from './common/Button';
import content from '../mock/MockContent';
import InputField from './common/InputField';
 
class ListItem extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      show: false,
    }; 
  }
  renderName() {
    return (
      <ul>
        {this.props.task}
      </ul>
    );
  }
  renderButtons() {
    return (
      <div>
        <span>
          <ButtonComponent id="edit-button" onClick={() => this.handleEdit()} value={this.props.Content.editButton} />
          <ButtonComponent onClick={(this.props.deleteItem.bind(this, this.props.task))} value={this.props.Content.deleteButton} />
        </span>
        
        <Modal show={this.state.show} animation={true} >
          <Modal.Header>{this.props.Content.modelHeader}</Modal.Header>
          <Modal.Body>
            <form>
              <InputField type="text" id="edited-popup"    
                defaultValue={this.props.task}
                handleOnChange={(e) => this.handleOnChange(e)}  />
            </form>
          </Modal.Body>
        
          <Modal.Footer>
            <ButtonComponent id="edited-field" onClick={this.onSaveClick.bind(this)} value={this.props.Content.okayButton} />
            <ButtonComponent id="edited-modal" onClick={() => this.handleModal()} value={this.props.Content.cancelButton} />
          </Modal.Footer>
        </Modal>
      </div>
    ); 
  }

  onSaveClick(e) { 
    e.preventDefault();
    this.props.saveItem(this.props.task, this.state.editInput);
    this.setState({
      show: !this.state.show,
    });
  }

  handleOnChange(e) {
    this.setState({
      editInput: e.target.value
    });
  }
  handleModal() {
    this.setState({ show: !this.state.show })
  }
  handleEdit() {
    this.handleModal();
  }
  render() {
    return (
      <div className="to-do-item">
        <span className="name">
          {this.renderName()}
        </span>
        <span className="actions">
          {this.renderButtons()}
        </span>
      </div>
    );
  }
}

ListItem.defaultProps = {
  Content: content
};
export default ListItem;