import { Component, Prop, Element, h } from '@stencil/core';
import Cropper from 'cropperjs';



@Component({
  tag: 'crds-profile-pic-uploader',
  styleUrl: 'crds-profile-pic-uploader.scss',
  shadow: false
})



export class CrdsModal {
  @Prop() onSave: Function;
  @Prop() src: string
  // @Element() element: HTMLElement;
  private cropperImage: HTMLImageElement;

  componentDidLoad(){
    const image = this.cropperImage;
    const cropper = new Cropper(image, {
      aspectRatio: 16 / 9,
      cropBoxMovable: false,
      cropBoxResizable: false,
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
        <img class='cropper-hidden' ref={el => (this.cropperImage = el as HTMLImageElement)} id="image" src={this.src}/>
      </div>
    );
  }
}
