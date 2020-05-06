import React from 'react';
import { Header, Image, Menu } from 'semantic-ui-react';
import logo from '../../assets/images/cropped-logo.jpg';

export default class Main extends React.Component {

  state = {
    message: null,
  };

  render() {

    return (
        <header id='header' role='banner'>
            <div className='menu'>
                <Menu secondary compact borderless>
                    <Menu.Item as='a'>Inicio</Menu.Item>
                    <Menu.Item as='a'>Sobre mí</Menu.Item>
                    <Menu.Item as='a'>Contacto</Menu.Item>
                </Menu>
            </div>
            <div className='header-logo'>
                <Image src={logo} size='small'></Image>
            </div>
		</header>
    );
  }
}
