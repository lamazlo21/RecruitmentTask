import React from 'react';
import Form from '../src/components/Form';
import {shallow} from 'enzyme';
import App from "../src/App";

describe('Testing Component', ()=>{
    it('Form calls sendForm function on button press',()=>{
        const sendFormSpy = jest.fn();

        const form = shallow(
            <Form
            sendForm={sendFormSpy}
            cleanAlerts={()=>null}
            />
        )
        form.find('#send-button').simulate('click');
        expect(sendFormSpy).toHaveBeenCalled();
    })
    it('Form calls sendAlerts function on button press',()=>{
        const cleanAlertsSpy = jest.fn();
        const form = shallow(
            <Form
                sendForm={()=>null}
                cleanAlerts={cleanAlertsSpy}
            />
        )
        form.find('#inputName').simulate('click');
        expect(cleanAlertsSpy).toHaveBeenCalled();
        form.find('#inputSurname').simulate('click');
        expect(cleanAlertsSpy).toHaveBeenCalled();
        form.find('#inputEmail').simulate('click');
        expect(cleanAlertsSpy).toHaveBeenCalled();
        form.find('#inputDate').simulate('click');
        expect(cleanAlertsSpy).toHaveBeenCalled();
    })
})