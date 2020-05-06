import React from 'react';
import { Header, Menu } from 'semantic-ui-react';

export default class Main extends React.Component {

  state = {
    message: null,
  };

  render() {
    return (
        <header id='header' role='banner'>
            <Menu compact borderless fixed>
                <Menu.Item name='Inicio' />
                <Menu.Item name='Sobre mí' />
                <Menu.Item name='Contacto' />
            </Menu>
		</header>
    );
  }
}
