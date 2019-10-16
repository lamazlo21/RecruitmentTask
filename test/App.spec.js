import React from 'react';
import App from '../src/App';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import mockAxios from 'axios';


describe('Component test', ()=> {
    it('Renders App without crash', () => {
        shallow(<App/>);
    })
    it('Renders list of errors based on state.errors',()=>{
        const app = shallow(<App/>);
        app.setState({
            errors: [
                { data:"Error", type:false},
                {data:"Correct",type:true}
            ]
        });
        expect(toJson(app)).toMatchSnapshot();
    })
})



describe('Form validation', () => {
    describe('Email Validation',()=>{
        it('Should return true',()=>{
            const wrapper = shallow(<App/>)
            const instance = wrapper.instance();
            let email1 = instance.validEmail('lamazlo21@wp.pl');
            let email2 = instance.validEmail('lam.zlo@wp.pl');
            expect(email1).toBeTruthy();
            expect(email2).toBeTruthy();
        })
        it('Should return false',()=>{
            const wrapper = shallow(<App/>)
            const instance = wrapper.instance();
            let email1 = instance.validEmail('lam@zlo@wp.pl');
            let email2 = instance.validEmail('lam@zlo@wp.');
            let email3 = instance.validEmail('lam@zlo@wppl');
            let email4 = instance.validEmail('lamwp.pl');
            let email5 = instance.validEmail('@');
            expect(email1).toBeFalsy();
            expect(email2).toBeFalsy();
            expect(email3).toBeFalsy();
            expect(email4).toBeFalsy();
            expect(email5).toBeFalsy();
        })
    })

    describe('Date Validation',()=>{
        it('Should return true',()=>{
            const wrapper = shallow(<App/>)
            const instance = wrapper.instance();
            let date1 = instance.validDate('10-16-2019');
            let date2 = instance.validDate('11-10-2019');
            let date3 = instance.validDate('05-05-2020');
            expect(date1).toBeTruthy;
            expect(date2).toBeTruthy;
            expect(date3).toBeTruthy;
        })
        it('Should return false',()=>{
            const wrapper = shallow(<App/>)
            const instance = wrapper.instance();
            let date1 = instance.validDate('10-16-2018');
            let date2 = instance.validDate('10-10-2019');
            let date3 = instance.validDate('05-05-2019');
            expect(date1).toBeFalsy;
            expect(date2).toBeFalsy;
            expect(date3).toBeFalsy;
        })

    })
});

describe('Methods validation',()=>{
    describe('cleanAlerts method validation',()=>{
        it('cleanAlerts cleans errors.state', ()=>{
            const app = shallow(<App/>);
            const instance = app.instance();
            app.setState({
                errors: [{
                    data: "error",
                    type: false
                }]
            })
            expect(app.state('errors')).toHaveLength(1);
            instance.cleanAlerts();
            expect(app.state('errors')).toHaveLength(0);
        })
    })

})



