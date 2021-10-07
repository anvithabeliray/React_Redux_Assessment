import React from 'react';
import content from '../mock/MockContent';
import ButtonComponent from './common/Button'; 
import InputField from './common/InputField';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      input: '' 
    });
  }

  handleOnCreate(e) {
    e.preventDefault();
    Promise.resolve(this.props.addItem(this.state.input)).then(() => {
      this.setState({ input: "" });
    })
  }
  handleOnChange(e) {
    this.setState({
      input: e.target.value
    })
  }
 
  render() {
    return ( 
      <div className="create-new">
         <InputField id="submit-click"
          type="text"
          placeholder={this.props.Content.placeholder}
          value={this.state.input}
          handleOnChange={(e) => this.handleOnChange(e)} />
        <ButtonComponent value={this.props.Content.addButton}
          id="hn-create" onClick={(e) => { this.handleOnCreate(e) }} />
      </div>
    );
  }
}
AddItem.defaultProps = {
  Content: content
};
export default AddItem;