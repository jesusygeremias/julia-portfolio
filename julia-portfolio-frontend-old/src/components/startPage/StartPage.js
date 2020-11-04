import React from 'react';
import { Header, Image, Menu } from 'semantic-ui-react';
import logo from '../../assets/images/cropped-logo.jpg';
import Gallery from "react-photo-gallery";
import { photos } from "../../assets/js/startPagePhotos";
import Carousel, { Modal, ModalGateway } from 'react-images';

export default class StartPage extends React.Component {

  state = {
    currentImage: 0,
    viewerIsOpen: false,
  };

  openLightbox = (e, { photo, index }) => { 
    this.setState({currentImage: index,  viewerIsOpen: true});
  }

  closeLightbox = () => { 
    this.setState({currentImage: 0,  viewerIsOpen: false});
  }

  render() {

    return (
      <div>      
        <div className='start-gallery'>
          <Gallery photos={photos} onClick={this.openLightbox}/>
        </div>
        <div>
          <ModalGateway>
            {this.state.viewerIsOpen ? (
              <Modal onClose={this.closeLightbox}>
                <Carousel
                  currentIndex={this.state.currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </div>    
    );
  }
}
