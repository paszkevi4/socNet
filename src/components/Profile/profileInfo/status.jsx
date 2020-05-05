import React from 'react'
import '../profile.sass'

 class Status extends React.Component {
    statusInputRef = React.createRef()
    state = {
        editMode: false,
        status: this.props.status
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        })
     }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }

     componentDidUpdate(prevProps) {
         if (prevProps.status != this.props.status) {
             this.setState({
                 status: this.props.status
             })
         }
     }

     render() {
        return (
            <div>
                { this.state.editMode
                    ? < input onChange={this.onStatusChange } className='status_input' placeholder={'status'}
                              autoFocus={true} onBlur={ this.deactivateEditMode.bind(this) } value={this.state.status}/>
                    : <p className='status_p' onClick={ this.activateEditMode.bind(this) }>{this.props.status}</p>
                }
            </div>
        )
    }
}

export default Status;