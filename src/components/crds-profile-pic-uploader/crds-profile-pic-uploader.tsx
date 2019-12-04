import { Component, Prop, State, Element, h } from '@stencil/core';
import Cropper from 'cropperjs';
import icon from './icons/zoom-in.svg'

// NOTE: this component is still missing the GraphQL API calls to persist the photo to the database

@Component({
  tag: 'crds-profile-pic-uploader',
  styleUrl: 'crds-profile-pic-uploader.scss',
  shadow: true
})

export class CrdsModal {
  @Prop() onSave: Function;
  @State() uploadedImgUrl: string;
  @State() finalImgUrl: string;
  @State() cropper;
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
      },
      cropend(){
      }
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

  // function to trigger hidden file-selector input from a custom styled button
  triggerFileSelector(){
    this.fileSelectorInput.click()
  }

  handleSavePhoto(){
    let finalImgUrl = this.cropper.getCroppedCanvas().toDataURL('image/jpeg');
    // save finalImgUrl in GraphQL...
  }

  checkToShowPlaceholderImage(){
    if (this.cropper){
      return false
    } else {
      // need to put code here to check if user has a current profile picture
      // check if user has profile picture, if not, return true / show placeholder image
      return true
    }
  }

  render() {
    const { uploadedImgUrl, cropper, finalImgUrl } = this;

    return (
      <div class="profile-pic-cropper__container">

        <div class="image-container">
          <img class="cropper-hidden" ref={el => (this.cropperImage = el as HTMLImageElement)} id="original-image" src={this.uploadedImgUrl}/>
          <img class={`placeholder-img ${!this.checkToShowPlaceholderImage() ? 'cropper-hidden' : '' }`} id="placeholder" src="https://discountdoorhardware.ca/wp-content/uploads/2018/06/profile-placeholder-3.jpg"/>
        </div>
        <div class={`cropper-buttons__container ${!cropper ? 'conceal' : '' }`}>

          <div class="button-icon-container">
            <crds-button color="blue" type="outline" onClick={()=> {this.cropper.zoom(0.1)}}></crds-button>
            <crds-icon name="zoom-in" size="20" color="blue"></crds-icon>
          </div>

          <div class="button-icon-container">
            <crds-button color="blue" type="outline" onClick={()=> {this.cropper.zoom(-0.1)}}></crds-button>
            <crds-icon name="zoom-out" size="20" color="blue"></crds-icon>
          </div>

          <div class="button-icon-container">
            <crds-button color="blue" type="outline" onClick={()=> {this.cropper.rotate(-45)}}></crds-button>
            <crds-icon name="rotate-left" size="20" color="blue"></crds-icon>
          </div>

          <div class="button-icon-container">
            <crds-button color="blue" type="outline" onClick={()=> {this.cropper.rotate(45)}}></crds-button>
            <crds-icon name="rotate-right" size="20" color="blue"></crds-icon>
          </div>
        </div>

        <div class="choose-file__container">
          <crds-button color="blue" type="outline" text="Choose file" onClick={() => {this.triggerFileSelector()}}></crds-button>
          <input type="file" name="pic" accept="image/*" ref={el => (this.fileSelectorInput = el as HTMLInputElement)} onChange={(e) => this.handleImageSelection(e.target.files)}/>
          <crds-button color="blue" text="Save photo" onClick={() => this.handleSavePhoto()}></crds-button>
        </div>
      </div>
    );
  }
}
