import React from 'react';
import { IUserState } from '../Interfaces/state';

interface Props {
  users: IUserState[],
  selectUser: (id: number) => void,
  selectedUser: number,
}

const Users: React.SFC<Props> = (props) => {

  const { users, selectUser, selectedUser } = props
  const tableCell = () => {
    return users.map((user: IUserState) => (
      <tr key={user.id} style={{ cursor: 'pointer' }} onClick={() => selectUser(user.id)}>
        <td className={selectedUser === user.id ? "selected-user" : ""}>
          {user.name}
        </td>
      </tr>
    ))
  }

  return (
    <div className="users">
      <table>
        <tbody>
          {tableCell()}
        </tbody>
      </table>
    </div>
  );
}

export default Users
