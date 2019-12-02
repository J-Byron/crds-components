import { Component, Prop, Element, h } from '@stencil/core';
import Cropper from 'cropperjs';



@Component({
  tag: 'crds-profile-pic-uploader',
  styleUrl: 'crds-profile-pic-uploader.scss',
  shadow: true
})



export class CrdsModal {
  @Prop() onSave: Function;
  // @Element() element: HTMLElement;
  private cropperImage: HTMLImageElement;

  componentDidMount(){
    const image = this.cropperImage;
    const cropper = new Cropper(image, {
      aspectRatio: 16 / 9,
      crop(event) {
        console.log(event.detail.x);
        console.log(event.detail.y);
        console.log(event.detail.width);
        console.log(event.detail.height);
        console.log(event.detail.rotate);
        console.log(event.detail.scaleX);
        console.log(event.detail.scaleY);
      },
    });
  }

  render() {
    return (
      <div>
        <img ref={el => (this.cropperImage = el as HTMLImageElement)} id="cropper" src="https://crds-media.imgix.net/4CWCvxN6iSb0QXDqvaT9Gt/a80cfd9a0b8154874777cbd71da59175/shutterstock_403980601.jpg?auto=format,compress&w=360&h=202.5&fit=crop"/>
      </div>
    );
  }
}
