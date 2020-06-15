import React from 'react';
import { Header, Image, Menu } from 'semantic-ui-react';

export default class RightBar extends React.Component {

  state = { 
    activeItem: 'Ilustración' 
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state

    return (
      <div className='container-right'>
          <div className='menu-right'>
            <Menu secondary vertical>
              <Menu.Item
                name='Ilustración'
                active={activeItem === 'Ilustración'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='Pintura'
                active={activeItem === 'Pintura'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='Dibujo'
                active={activeItem === 'Dibujo'}
                onClick={this.handleItemClick}
              />
            </Menu>
          </div>          
		  </div>
    );
  }
}
