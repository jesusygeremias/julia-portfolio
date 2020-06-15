import React from 'react';
import { Header, Image, Menu } from 'semantic-ui-react';
import logo from '../../assets/images/cropped-logo.jpg';
import Gallery from "react-photo-gallery";
import { photos } from "../../assets/js/startPagePhotos";

export default class StartPage extends React.Component {

  render() {
    //Probar con grid de semantic-ui-react ya que este queda mal y no puedo controlar lo grande que es.
    //Estoy borracho así no es el mejor para seguir

    return (
      <main>
        <article>
          <div className = 'start-gallery'>
            <Gallery photos={photos} /> 
          </div>
        </article>
      </main>
    );
  }a
}
