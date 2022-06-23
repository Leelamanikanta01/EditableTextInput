import {Component} from 'react'

import './index.css'

class EditableTextInput extends Component {
  state = {
    inputValue: '',
    editValue: false,
  }

  onClickValue = () => {
    this.setState(prevState => ({
      editValue: !prevState.editValue,
    }))
  }

  onChangeInputValue = input => {
    this.setState({inputValue: input.target.value})
  }

  render() {
    const {inputValue, editValue} = this.state
    const buttonText = editValue ? 'Save' : 'Edit'
    return (
      <div className="card-container">
        <div className="edit-container">
          <h1 className="heading">Editable Text Input</h1>
          {editValue ? (
            <p>{inputValue}</p>
          ) : (
            <inputValue
              type="text"
              onChange={this.onChangeInputValue}
              value={inputValue}
            />
          )}
          <button
            className="edit-button"
            type="button"
            onClick={this.onClickValue}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default EditableTextInput
