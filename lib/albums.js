import React from 'react'
import { Link } from 'react-router'
import ClickedAlbum from './clickedAlbum'


export default React.createClass({
  getDefaultProps() {
     return {
      albums: [
        {
          album_title: "Blue",
          id: 0,
          images: [
            {
              img_src: "blue1.jpeg",
              image_title: "bee on blue"
            },{
              img_src: "blue2.jpeg",
              image_title: "blue smoke"
            },{
              img_src: "blue3.jpeg",
              image_title: "boy with saxaphone on blue wall"
            }
          ]
        },
        {
          album_title: "Green",
          id: 1,
          images: [
            {
              img_src: "green1.jpeg",
              image_title: "Frog"
            },{
              img_src: "green2.jpeg",
              image_title: "Green macaron"
            },{
              img_src: "green3.jpeg",
              image_title: "Plants on apartment"
            }
          ]
        },
        {
          album_title: "Pink",
          id: 2,
          images: [
            {
              img_src: "pink1.jpeg",
              image_title: "Pink smoothie"
            },{
              img_src: "pink2.jpeg",
              image_title: "Pink hair"
            },{
              img_src: "pink3.jpeg",
              image_title: "Pink clouds"
            }
          ]
        },
        {
          album_title: "Purple",
          id: 3,
          images: [
            {
              img_src: "purple1.jpeg",
              image_title: "Purple concert"
            },{
              img_src: "purple2.jpeg",
              image_title: "Purple and red flower"
            },{
              img_src: "purple3.jpeg",
              image_title: "Purple bike"
            }
          ]
        },
        {
          album_title: "Red",
          id: 4,
          images: [
            {
              img_src: "red1.jpeg",
              image_title: "Red canyon"
            },{
              img_src: "red2.jpeg",
              image_title: "Red flowers"
            },{
              img_src: "red3.jpeg",
              image_title: "Red smoke"
            }
          ]
        },
        {
          album_title: "Yellow",
          id: 5,
          images: [
            {
              img_src: "yellow1.jpeg",
              image_title: "Yellow trim"
            },{
              img_src: "yellow2.jpeg",
              image_title: "Yellow flowers with bee"
            },{
              img_src: "yellow3.jpeg",
              image_title: "Yellow flowers in field"
            }
          ]
        }
      ]
    }
  },
  // current album is first one. none selected
  componentWillMount() {
    this.setState(
      {
        currentAlbum: this.props.albums[0]
      }
    )
  },
  // when clicked target album to select it
  onClickNewAlbum(e) {
    this.setState(
      {
        currentAlbum: this.props.albums[e.target.id]
      }
  )
  // e.preventDefault();
},
  render() {
     return (
       <div>
         <aside className="album_sidebar">
           {this.props.albums.map(function(album, i){
             return <h2 key={i}  className="albums_links">
               <Link className="link" id={album.id} onClick={this.onClickNewAlbum} to={`/albums/${album.album_title}`}>{album.album_title}
               </Link>
             </h2>
           },this)}
         </aside>
         <ClickedAlbum album={this.state.currentAlbum}/>
       </div>
     )
   }
 })
