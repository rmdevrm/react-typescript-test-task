import React, { ChangeEvent } from 'react';

interface Props {
  handleAddHobby: (hobbyData: object) => void;
}

interface State {
  passionLevel: string;
  hobbyName: string;
  year: string;
  isError: boolean;
}

const passionLevelTypes = ['Select Level', 'Low', 'Medium', 'High', 'Very-High']

class AddHobby extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      passionLevel: '',
      hobbyName: '',
      year: '',
      isError: false,
    }
  }

  fieldValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ year: event.target.value })
  }

  handleHobbyName = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ hobbyName: event.target.value })
  }

  selectPassionLevel = (passionLevel: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ passionLevel: passionLevel.target.value })
  }

  addNewHobby = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    ev.preventDefault();

    const { handleAddHobby } = this.props
    const { isError, ...hobbyData } = { ...this.state }

    if (!hobbyData.hobbyName.trim() || !hobbyData.year.trim() || !hobbyData.passionLevel.trim()) {
      return this.setState({ isError: true })
    }

    handleAddHobby(hobbyData)
    this.setState({
      passionLevel: '',
      hobbyName: '',
      year: '',
      isError: false,
    })
  }

  render() {
    const { hobbyName, year, isError } = this.state
    
    return (
      <div className="addUser">
        <form>
          <input
            type="text"
            value={hobbyName}
            placeholder="Enter user hobby"
            onChange={this.handleHobbyName}
            className={isError ? "input-error" : ""}
          />
          <select
            onChange={this.selectPassionLevel}
            className={`selectClass ${isError ? "input-error" : ""}`}>
            {
              passionLevelTypes.map(type => (
                <option value={type} key={ type }>{type}</option>
              ))
            }
          </select>
          <input
            type="number"
            value={year}
            placeholder="Enter year"
            onChange={this.fieldValueChange}
            className={isError ? "input-error" : ""}
          />
          <button type="submit" onClick={this.addNewHobby}>
            Add
          </button>
        </form>
      </div>
    )
  }
}

export default AddHobby
