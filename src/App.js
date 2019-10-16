import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Form from './components/Form';

// Styles
import '../public/styles/styles.css';
import axios from "axios";

class App extends Component {

  state={
    errors: []
  };


    validEmail=(email)=>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    validDate=(date)=>{
        let dateArr = [];
        let currDate = new Date();
        let currYear = currDate.getFullYear();
        let currMonth = currDate.getMonth()+1;
        let currDay = currDate.getDate();
        dateArr = date.split('-');
        for(let i in dateArr){
            dateArr[i] = parseInt(dateArr[i],10)
        }
        if(dateArr[0]>=currYear&&dateArr[1]>=currMonth&&dateArr[2]>=currDay)
            return true
        return false
    }

    postMethod=(url, name, surname, email, date, array)=>{
        axios.post(url,{
            name: name.value,
            surname: surname.value,
            email: email.value,
            date: date.value
        }).then((res) => {
            array.push(res.data)
            this.setState({errors: array},()=>{
                name.value ='';
                surname.value ='';
                email.value='';
                date.value = '';
            })
        }).catch(res => {
            if(res.data===undefined)
                array.push({
                    data: "There is a problem connecting to the server!",
                    type: false
                })
            else
                array.push(res.data)
            this.setState({errors: array})
        })

    }

    sendForm=(e)=> {
        e.preventDefault();
        let array = [];
        let name = document.getElementById('inputName');
        let surname = document.getElementById('inputSurname');
        let email = document.getElementById('inputEmail');
        let date = document.getElementById('inputDate');
        //Basic validation
        if(name.value.length<1||name.value.length>50) {
            array.push({
                data: "Name has to contain between 1 to 50 letters!",
                type: false
            })
        }
        if(surname.value.length<1||surname.value.length>50) {
            array.push({
                data: "Surname has to contain between 1 to 50 letters!",
                type: false
            })
        }
        if(!this.validEmail(email.value)){
            array.push({
                data:"Email format is incorrect!",
                type:false
            })
        }
        if(!(date.value.length>0&&this.validDate(date.value))){
            array.push({
                data:"You cannot choose a date from the past!",
                type:false
            })
        }

        if(array.length===0)
            this.postMethod('http://127.0.0.1:4000/', name, surname, email, date, array);
        this.setState({errors: array})
    }

     cleanAlerts=()=>{
        this.setState({errors: []});
    }


    render() {
    let errors = this.state.errors.map((val, index)=>{
      return(
          //The alert is green when form is accepted and red when the error occurs
      <li className={val.type===true?"alert alert-success box":"alert alert-danger box"}  role="alert" key={index}>
          {val.data}
      </li>
      );
    })
    return (
      <div className="App">
        {errors}
        <Form sendForm={this.sendForm} cleanAlerts={this.cleanAlerts}/>
      </div>
    );
  }
}



export default (App);