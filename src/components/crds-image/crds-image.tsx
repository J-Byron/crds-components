import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'crds-image',
  styleUrl: 'crds-image.scss',
  shadow: true
})
export class CrdsImage {
  @Prop() src: string;
  @Prop() size: string;
  @Prop() aspectRatio: string;

  @State() imgDidLoad: boolean = false;
  @State() cachedImg: HTMLElement;

  private imgWrapper: HTMLDivElement;

  private sizes = ['card', 'thumbnail', 'overlay', 'media-object'];

  private validateSize() {
    if (this.sizes.indexOf(this.size) == -1) {
      throw new Error(`${this.size} is an invalid value for crds-image size`);
    }
  }

  private validateAspectRatio() {
    if (this.aspectRatio.replace(/[0-9]+:[0-9]+/g, '') !== '') {
      throw new Error(
        `${this.aspectRatio} is an invalid value for crds-image aspectRatio. It should be formatted x:y example 16:9`
      );
    }
  }

  // == Trying something out start ================================================
  private getSrcQueryString(src: string) {
    return src
      .match(/\?.+/)
      .toString()
      .replace('?', '');
  }

  private splitAspectRatio() {
    return this.aspectRatio.split(':');
  }

  private getSrcUrlParameters(src: string) {
    return new URLSearchParams(this.getSrcQueryString(src));
  }

  private getSrcUrl(src: string) {
    return src.replace(this.getSrcQueryString(src), '').replace('?', '');
  }

  private setSrcImgixParameters(src: string, parameters = {}) {
    const urlParameters = this.getSrcUrlParameters(src);
    const url = this.getSrcUrl(src);

    // @todo Start here
    console.log(this.splitAspectRatio());

    Object.entries(parameters).forEach(([key, value]: [string, string]) => {
      return urlParameters.set(key, value);
    });

    return [url, '?', urlParameters.toString()].join('');
  }

  private setThumbnailImgixParameters(src: string, parameters = {}) {
    parameters = {
      ...parameters,
      ...{
        w: 10,
        h: 10
      }
    };

    return this.setSrcImgixParameters(src, parameters);
  }
  // == Trying something out end ================================================

  connectedCallback() {
    this.validateSize();
    this.validateAspectRatio();
  }

  public addObserver() {
    // Cache Images
    const img = new Image();
    img.classList.add('crds-img');
    img.src = this.setThumbnailImgixParameters(this.src);

    // Create observer
    const options = {
      threshold: 0
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0) {
          img.onload = () => {
            img.classList.add('loaded');
            this.imgDidLoad = true;
            this.cachedImg = img;
          };

          img.src = this.src;
        }
      });
    });
    observer.observe(this.imgWrapper);
  }

  public componentDidLoad() {
    this.addObserver();
  }

  renderInnerHTML() {
    const { imgDidLoad, cachedImg } = this;
    if (imgDidLoad) {
      return cachedImg.outerHTML;
    }
  }

  render() {
    const { size } = this;
    return (
      <div
        class={`crds-img-container ${size ? size : ''}`}
        innerHTML={this.renderInnerHTML()}
        ref={el => (this.imgWrapper = el as HTMLDivElement)}
      />
    );
  }
}
