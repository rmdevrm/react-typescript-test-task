import React, { ChangeEvent } from 'react';

interface Props {
  handleAddUser: (name: string) => void,
}

interface State {
  newUserName: string;
  isError: boolean;
}

class AddUser extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      newUserName: '',
      isError: false,
    }
  }

  userNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ newUserName: event.target.value })
  }

  addNewUser = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    ev.preventDefault();

    const { handleAddUser } = this.props
    const { newUserName } = this.state

    if (!newUserName.trim()) {
      return this.setState({ isError: true })
    }

    handleAddUser(newUserName)
    this.setState({
      newUserName: '',
      isError: false,
    })
  }

  render() {
    const { newUserName, isError } = this.state
    return (
      <div className="addUser">
        <form>
          <input
            type="text"
            placeholder="Enter user name"
            value={newUserName}
            onChange={this.userNameChange}
            className={isError ? "input-error" : ""}
          />
          <button type="submit" onClick={this.addNewUser}>
            Add
          </button>
        </form>
      </div>
    )
  }
}

export default AddUser
