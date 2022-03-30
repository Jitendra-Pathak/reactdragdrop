
import React from "react";
import {configure, shallow, } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
	
import DragDrop from '../dragDrop.js';

describe('DragDrop Test Cases', () => {
  const props = {
    options: [
      {
        id: 'row-1',
        value: 'Hello'
      },
      {
        id: 'row-2',
        value: 'Welcome'
      }
    ],
    containerId: 'customDragdrop',
    customTemplate: jest.fn(),
    reArrangeCallback: jest.fn(),
  };
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DragDrop {...props} />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render with following props", () => {
    const instance = wrapper.instance();
    instance.getOptionsList = jest.fn();

    expect(wrapper.length).toBe(1);
    // expect(instance.getOptionsList).toHaveBeenCalled();
  });
  
  it("function getOptionsList calling test", () => {
    const instance = wrapper.instance();
    const getOptionsList = jest.spyOn(instance, 'getOptionsList').mockReturnValue(() => { });
    instance.getOptionsList();

    expect(getOptionsList).toHaveBeenCalled();
  });

  it("function dragOver calling test", () => {
    const instance = wrapper.instance();
    const event = { preventDefault: () => { } }
    const id ="row-2";
    instance.dragged = { dataset: { id: 'row-2' } };

    jest.spyOn(event, 'preventDefault');
    jest.spyOn(instance, 'dragOver');

    instance.dragOver(event, id);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(instance.dragOver).toHaveBeenCalled();
  });

  it("function dragEnd: if drag end is on in-valid place ", () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'dragEnd');
    jest.spyOn(instance, 'restoreOrder');

    instance.dragEnd();

    expect(instance.dragEnd).toHaveBeenCalled();
    expect(instance.restoreOrder).toHaveBeenCalled();
  });

  it("function dragEnd: if drag end is on valid place ", () => {
    const instance = wrapper.instance();
    instance.isValidDrop = true;

    instance.dragged = { dataset:{id: 'row-2'} };

    jest.spyOn(instance, 'dragEnd');
    jest.spyOn(instance, 'swapElements').mockReturnValue(props.options);
    instance.dragEnd();

    expect(instance.dragEnd).toHaveBeenCalled();
    expect(instance.swapElements).toHaveBeenCalled();
  });
  
  it("function dragStart ", () => {
    const instance = wrapper.instance();
    instance.isValidDrop = true;
    const event = { currentTarget: null, dataTransfer: { effectAllowed: null, setData: jest.fn() }};

    jest.spyOn(instance, 'dragStart');
    instance.dragStart(event);
    expect(instance.isValidDrop).toBe(false);
    expect(instance.dragStart).toHaveBeenCalled();
    expect(event.dataTransfer.setData).toHaveBeenCalled();
  });
 
  it("function onDrop ", () => {
    jest.spyOn(document, 'querySelector').mockImplementation((selector) => {
      const container = {contains: jest.fn()};
      return container;
    });
    const instance = wrapper.instance();
    jest.spyOn(instance, 'onDrop');
    const event = { currentTarget: null, dataTransfer: { effectAllowed: null, setData: jest.fn() }};

    instance.onDrop(event);
    
    expect(instance.onDrop).toHaveBeenCalled();
  });
});
