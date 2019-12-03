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

  componentDidUpdate(){
    // when the user uploads an image (and state is updated), render the cropper
    this.renderCropper();
  }

  // function to detect the uploaded image element and apply the cropper to it
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
      // when the user uploads an image, set it in state
      this.uploadedImgUrl = URL.createObjectURL(selectorFiles[0]);
  }

  render() {
    const { uploadedImgUrl } = this;

    return (
      <div class="profile-pic-cropper__container">
        <div class="image-container">
          <img class="cropper-hidden" ref={el => (this.cropperImage = el as HTMLImageElement)} id="cropper" src={this.uploadedImgUrl}/>
        </div>
        <input type="file" name="pic" accept="image/*" onChange={(e) => this.handleImageSelection(e.target.files)}/>
      </div>

    );
  }
}
