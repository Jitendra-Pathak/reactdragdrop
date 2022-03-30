import React from 'react';
import Component from "../index";
import { SIDEBAR_DATA, DRAGLIST_DATA, TABS_DATA } from './constant';
import './style.scss';

class DemoComponent extends Component {
  constructor(props) {
    super(props);
  };

  getDragRowAction = (data) => {
    return (
      <div className='customTemplate'>
        <span className='label'> {data.value} </span>
        <span className='btn' onClick={()=>{console.log('clicked', data)}}>DELETE</span>
      </div>
    )
  };

  rearrangeCallback = (data) => {
    console.log('sidebarRearrangeCallback data', data);
  };

  render() {
    return (
      <div className='container'>
        <div className='sidebar'>
          <Component
            containerId='sidebarDropArea'
            containerClass='colDragCustomClass'
            options={SIDEBAR_DATA}
            reArrangeCallback={this.rearrangeCallback}
          />
        </div>

        <div className='content'>
          <h1 className="demoPageTitle">Drag and Drop Example </h1>

          <div className='exptext'>
            <b>Example 1 (Sidebar view): </b>
            <span>This is default example with default UI</span>
          </div>

          <div className='exptext'>
            <b>Example 2: </b>
            <span>
              This is with custom template for custom UI using 
              <b>"customTemplate"</b> prop with a Delete action.
            </span>
            <p>Also we made option disable from drag and drop using <b>"draggable"</b> key in data.</p>
          </div>
          <div className='wrapper vertical'>
            <Component
              containerId='verticalDropArea'
              containerClass='customClass'
              options={DRAGLIST_DATA}
              reArrangeCallback={this.rearrangeCallback}
              customTemplate={this.getDragRowAction}
              itemClass="customListItem"
            />
          </div>

          <div className='exptext'>
            <b>Example 3: </b>
            <span>Here we override Style using custom class with default component UI.</span>
          </div>

          <div className='wrapper horizontal'>
            <Component
              containerId='horizontalDropArea'
              containerClass='customClass'
              options={TABS_DATA}
              reArrangeCallback={this.rearrangeCallback}
              itemClass="customListItem"
            />
          </div>

        </div>
      </div>

    );
  };
};

export default DemoComponent;