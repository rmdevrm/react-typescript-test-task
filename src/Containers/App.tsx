import React from 'react';
import { connect } from 'react-redux';
import Hobbies from '../Components/hobbiesTable';
import UsersTable from '../Components/usersTable';
import AddUser from '../Components/addUser';
import AddHobby from '../Components/addHobby';
import '../App.css';

import { IHobbyState, IUserState, IState } from '../Interfaces/state';
import { getUsersData, addUserData } from '../Actions/user';
import { addUserHobbyData, deleteUserHobbyData } from '../Actions/hobbies';

interface Hobbies {
  id: number,
  passionLevel: string,
  name: string,
  year: string,
}

interface Props {
  users: Array<IUserState>;
  getUsers: () => void;
  addNewUser: (userName: string) => void;
  addNewHobbies: (hobby: object) => void;
  deleteHobby: (hobby: object) => void;
}

interface State {
  hobbies: IHobbyState[];
  selectedUser: number;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hobbies: [],
      selectedUser: -1,
    }
  }

  componentDidMount() {
    this.props.getUsers();
    this.makeTableFlexible();
  }

  updateHobbies = () => {
    const { selectedUser } = this.state
    const { users } = this.props
    const user = users.find( user => user.id === selectedUser )
    if(selectedUser)
    this.setState( {
      selectedUser,
      hobbies: user!.hobbies,
    } )
  }

  makeTableFlexible = () => {
    const table = document.getElementById('flexibleDiv')
  }

  handleSelectUser = (id: number) => {
    const { users } = this.props
    let user = users.find(user => user.id === id)
    this.setState({ selectedUser: id, hobbies: user!.hobbies })
  }

  handleDeleteHobby = (id: number) => {
    const { deleteHobby } = this.props
    const { selectedUser } = this.state
    const hobbyData = {
      userId: selectedUser,
      hobbyId: id,
    }
    if ( selectedUser !== -1 && selectedUser ) {
      deleteHobby( hobbyData )
    }
  }

  handleAddUser = (username: string) => {
    this.props.addNewUser(username)
  }

  handleAddHobby = (hobby: Object) => {
    const { addNewHobbies } = this.props
    const { selectedUser } = this.state
    const hobbyData = {
      userId: selectedUser,
      hobbyData: hobby,
    }
    if( selectedUser !== -1 && selectedUser ) {
      addNewHobbies( hobbyData )
      this.updateHobbies()
    }
  }

  render() {
    const { hobbies, selectedUser } = this.state
    const { users } = this.props
    return (
      <div className="App">
        <div className="user-hobbies" id="flexibleDiv">
          <div className="users-data" >
            <AddUser handleAddUser={this.handleAddUser} />
            <UsersTable
              users={users}
              selectUser={this.handleSelectUser}
              selectedUser={selectedUser}
            />
          </div>
          <div className="hobbies-data">
            { selectedUser !== -1 && <AddHobby handleAddHobby={this.handleAddHobby} /> }
            <Hobbies
              userHobbies={hobbies}
              deleteHobby={this.handleDeleteHobby}
              isUserSelected={selectedUser !== -1 ? true : false}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  users: state.users,
})

const mapDispatchToProps = (dispatch: any) => ({
  getUsers: () => dispatch(getUsersData()),
  addNewUser: (userName: string) => dispatch(addUserData(userName)),
  addNewHobbies: (hobbyData: object) => dispatch(addUserHobbyData(hobbyData)),
  deleteHobby: ( hobbyData: object) => dispatch(deleteUserHobbyData(hobbyData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
