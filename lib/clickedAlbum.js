import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState() {
    return {
      currentImage: this.props.album.images[0],
      modalOpen: false
    }
  },
  clickExpand(e){
    this.setState(
      {
        currentImage: this.props.album.images[e.target.id],
        currentImageID: e.target.id,
        modalOpen: true
      }
    )
  },
  onClickExit(e){
    this.setState(
      {
        modalOpen: false
      }
    )
  },

  clickBack(e){
    var newImageID = (Number(this.refs.modalImage.id) - 1);
    if(newImageID < 0){
      //do nothing
    }else{
      this.setState(
        {
          currentImage: this.props.album.images[newImageID],
          currentImageID: newImageID
        }
      )
    }
  },
  clickNext(e){
    var newImageID = (Number(this.refs.modalImage.id) + 1);
    if(newImageID >= this.props.album.images.length){
      //do nothing
    }else{
      this.setState(
        {
          currentImage: this.props.album.images[newImageID],
          currentImageID: newImageID
        }
      )
    }
  },
  render() {
    return (
      <div>
        <section>
          <h3 className="album_title">{this.props.album.album_title}</h3>
          {this.props.album.images.map((image, i) => {
          return <span key={i}
                  className="image_container">
              <img className="current_image" key={i} id={i} onClick={this.clickExpand} src={`../images/${image.img_src}`} alt={image.image_title}/>
            </span>
          }, this)}
          <Link className="back" to="/">
          Back to album{this.state.onClickExit}
          </Link>
        </section>
        <div className={this.state.modalOpen ? "modalShow" : "modalHide"}>
          <img className="modal_image" ref="modalImage" id={this.state.currentImageID} src={`../images/${this.state.currentImage.img_src}`}/>
          <i className="arrows" onClick={this.clickNext}>
          </i>
        </div>
      </div>
    )
  }
})
