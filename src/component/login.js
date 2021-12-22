import React, { Component } from 'react'
import { connect } from 'react-redux'
export class Login extends Component {
   
    render() {
        const {getUsers }= this.props
        const users=Object.keys(getUsers)
        console.log(users)

        return (
            <div className='question'>
                <h2 >Would you rather app </h2>
                <h4>choose user to login </h4>

<ul>
          {users.map((user) => (
            <li key={user}><button>
              <img
                className="avatar"
                src={user.avatarURL}
                alt={`avatar of ${user.name}`}
              />
              <div className="question-info">
                {user.name}


              </div>
              </button>
            </li>
          ))}
        </ul>
        
            </div>
        )
    }
}

export default connect(mapStateToProps)(Login);

function mapStateToProps({ getUsers }) {
  return {
    getUsers,
  };
}