import React from 'react';
import { IHobbyState } from '../Interfaces/state';

interface Props {
  isUserSelected: boolean;
  userHobbies: IHobbyState[];
  deleteHobby: (id: number) => void;
}

const Hobbies: React.SFC<Props> = (props) => {

  const { userHobbies, deleteHobby, isUserSelected } = props;
  
  const tableCell = () => {
    if (userHobbies.length === 0) {
      return (
        <tr>
          <td>No hobbies available, please add one to get started!</td>
        </tr>
      )
    }
    return userHobbies.map((hobby: IHobbyState) => (
      <tr key={hobby.id}>
        <td>
          Passion: {hobby.passionLevel}
        </td>
        <td>
          {hobby.hobbyName}
        </td>
        <td>
          Since {hobby.year}
        </td>
        <td>
          <button onClick={() => deleteHobby(hobby.id)}>
            Delete
           </button>
        </td>
      </tr>
    ))
  }

  return (
    <div className="hobbies">
     {isUserSelected ? <table>
        <tbody>
          {tableCell()}
        </tbody>
      </table> : <span>Please select a user to view his/her hobbies</span>}
    </div>
  );
}

export default Hobbies
