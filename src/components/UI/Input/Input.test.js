// import React from 'react'
// import chai, {expect} from 'chai';
// import { shallow, mount } from 'enzyme';
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });
// import Input from './Input';

// describe('Input Component', () => {
//     let wrapper
//     beforeEach( ()=>{
//         let props = {
//             placeholder:"name",
//             name:"name",
//             value:"naresh",
//             change:() =>{},
//             classes:"input"
//         }
//         wrapper = mount(<Input {...props} />);
//         wrapper.setProps({value:"123"});
//         console.log(wrapper.debug());
//         //wrapper = mount(<Input {...props}  />);
//     })
//   it('Input default value should be Naresh', () => {
//     expect(wrapper.find(".input").prop('value')).to.be.equal("naresh");
//   })
// });


import React from 'react';
import {expect} from 'chai';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import sinon from 'sinon';
import Button from '../Buttons/Buttons';
import Input from './Input';

describe('The searchPage component', () => {
    let wrapper, button, onClickMethod;

    beforeEach(() => {
        onClickMethod = sinon.spy();
        let props = {
            value: "123",
            classes:'input'
        }

        let btnProps = {
            clicked:onClickMethod
        }

        wrapper = shallow(<Input {...props}/>);
        button = shallow(<Button {...btnProps} />);
    });

    it('Should not render the modal component when the page loads',() => {
        let obj = {name:"name", prop:"some"}
        expect(obj).to.be.contain({name:"name"})
    });

    it('Modal should load onClick of the ClearAll button ',() => {
       // button.prop('onClick')();
        button.simulate('click');
        expect(onClickMethod).to.have.property('callCount', 1);
       // expect(wrapper.find('.input').prop('value')).to.be.equal("Naresh");
    });

    it('Modal should close when no is selected',() => {
        button.simulate('click');
        expect(onClickMethod).to.have.property('callCount', 1);
        wrapper.setProps({value:"somthing"});
        expect(wrapper.find('.input').prop('value')).to.be.equal("somthing");
        // button = actualComponent.find('.cancel_clear_agent_table');
        // button.simulate('click');
        // expect(Modal.prop(active)).to.be.false;

    });

    // it('Modal should close when yes is selected and reset the table',() => {
    //     button = actualComponent.find('.clear_agent_table');
    //     actualComponent.setProps({modalIsActive:false});
    //     expect(Modal.prop(active)).to.be.false;
    // });

});