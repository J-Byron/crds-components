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
  @State() cropper: object;
  // @Element() element: HTMLElement;
  private cropperImage: HTMLImageElement;
  private fileSelectorInput: HTMLInputElement;

  componentDidUpdate(){
    // when the user uploads an image (and state is updated), render the cropper
    this.renderCropper();
  }

  // function to detect the uploaded image element and apply the cropper to it
  renderCropper(){
    let isCropperAlreadyInitiated = false;
    const image = this.cropperImage;

    // if a cropper instance already exists, just replace the image src it uses
    if (this.cropper !== undefined){
      isCropperAlreadyInitiated = true;
    };

    // if no cropper instance exists, create one
    if (!isCropperAlreadyInitiated){
      this.initiateCropper(image)
    } else {
      // otherwise, if cropper instance already exists, just replace the image src
      this.replaceCropperImageSrc(image.src)
    }
  }

  // function to create a new cropperJS instance if one does not yet exist
  initiateCropper(image){
    const cropper = new Cropper(image, {
      aspectRatio: 1/1,
      viewMode: 2,
      crop(event) {
        console.log(event.detail.x);
      },
    });
    // set this cropper instance in state
    this.cropper = cropper;
  }

  // cropper to change the imgSrc on an already initiated cropperJS instance
  replaceCropperImageSrc(imgSrc){
    this.cropper.replace(imgSrc)
  }

  handleImageSelection(selectorFiles: FileList){
      // when the user uploads an image, set it in state
      this.uploadedImgUrl = URL.createObjectURL(selectorFiles[0]);
  }

  triggerFileSelector(){
    this.fileSelectorInput.click()
  }

  render() {
    const { uploadedImgUrl, cropper } = this;

    return (
      <div class="profile-pic-cropper__container">
        <div class="image-container">
          <img class="cropper-hidden" ref={el => (this.cropperImage = el as HTMLImageElement)} id="cropper" src={this.uploadedImgUrl}/>
          <img class={`placeholder-img ${cropper? 'cropper-hidden' : '' }`} id="placeholder" src="https://discountdoorhardware.ca/wp-content/uploads/2018/06/profile-placeholder-3.jpg"/>
        </div>
        <div class="choose-file__container">
          <crds-button color="blue" type="outline" text="Choose file" onClick={() => {this.triggerFileSelector()}}></crds-button>
          <input type="file" name="pic" accept="image/*" ref={el => (this.fileSelectorInput = el as HTMLInputElement)} onChange={(e) => this.handleImageSelection(e.target.files)}/>
          <crds-button color="blue" text="Save photo"></crds-button>
        </div>
      </div>
    );
  }
}
