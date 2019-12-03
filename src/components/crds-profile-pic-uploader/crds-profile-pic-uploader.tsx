import { Component, Prop, Element, h } from '@stencil/core';
import Cropper from 'cropperjs';



@Component({
  tag: 'crds-profile-pic-uploader',
  styleUrl: 'crds-profile-pic-uploader.scss',
  shadow: true
})



export class CrdsModal {
  @Prop() onSave: Function;
  @State() uploadedImgUrl: string;
  // @Element() element: HTMLElement;
  private cropperImage: HTMLImageElement;

  componentDidLoad(){
    this.renderCropper();
  }

  renderCropper(){
    const image = this.cropperImage;
    const cropper = new Cropper(image, {
    aspectRatio: 1/1,
     viewMode: 2,
      crop(event) {
        console.log(event.detail.x);
      },
    });
  }

  handleImageSelection(selectorFiles: FileList){
      this.uploadedImgUrl = URL.createObjectURL(selectorFiles[0]);
      setTimeout(function(){
        const image = this.cropperImage;
         debugger
        const cropper = new Cropper(image, {
        aspectRatio: 1/1,
         viewMode: 2,
          crop(event) {
            console.log(event.detail.x);
          },
        });; }, 1000);
  }

  render() {
    const { uploadedImgUrl } = this;

    return (
      <div class="form-container">
        <div id="image-container">
          <img class="cropper-hidden" ref={el => (this.cropperImage = el as HTMLImageElement)} id="cropper" src={`${uploadedImgUrl? uploadedImgUrl : 'https://crds-media.imgix.net/4CWCvxN6iSb0QXDqvaT9Gt/a80cfd9a0b8154874777cbd71da59175/shutterstock_403980601.jpg?auto=format,compress&w=360&h=202.5&fit=crop' }`}/>
        </div>
        <input type="file" name="pic" accept="image/*" onChange={(e) => this.handleImageSelection(e.target.files)}/>
        <img src={this.uploadedImgUrl}/>
      </div>

    );
  }
}
