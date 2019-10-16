import React, {Component} from 'react';

class Form extends Component{

    render() {
         return(
            <form className="form">
                <div className="form-group">
                    <label htmlFor="exampleInputName">Name</label>
                    <input type="text" className="form-control" id="inputName" aria-describedby="emailHelp" onClick={this.props.cleanAlerts}
                           placeholder="Enter name"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputSurname">Surname</label>
                    <input  type="text" className="form-control" id="inputSurname" aria-describedby="emailHelp" onClick={this.props.cleanAlerts}
                           placeholder="Enter surname"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="text" className="form-control" id="inputEmail" aria-describedby="emailHelp" onClick={this.props.cleanAlerts}
                           placeholder="Enter email"></input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Date</label>
                    <input type="date" className="form-control" id="inputDate" placeholder="Pick date" onClick={this.props.cleanAlerts}></input>
                </div>
                <button id="send-button" type="submit" className="btn btn-primary" onClick={this.props.sendForm}>Submit</button>
            </form>
        )}
}


export default Form;