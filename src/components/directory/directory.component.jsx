import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.css';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crwn-db-b2d79.appspot.com/o/DSC_3220.JPG?alt=media&token=73187425-9982-4c0c-a4f9-6bb96046cc06',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crwn-db-b2d79.appspot.com/o/DSC_8602-2.png?alt=media&token=20980153-821a-40c5-ad65-27d5c80a1d1a',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'sneakers',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crwn-db-b2d79.appspot.com/o/DSC_8754-2.png?alt=media&token=221db92f-f6f0-4953-bd6b-66aa00f14cdbhttps://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'womens',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crwn-db-b2d79.appspot.com/o/Dirt%20Run%20-%202019%20Salzburg%20-%20094.jpg?alt=media&token=b46b5cf7-264c-4259-8de2-ea5a8704201e',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'mens',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crwn-db-b2d79.appspot.com/o/EL3A4067.jpg?alt=media&token=cf295762-5ebd-400c-8207-1462d883e4d6',
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
