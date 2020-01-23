import { Component, State, Prop, h } from '@stencil/core';

@Component({
  tag: 'crds-instagram-feed',
  styleUrl: 'crds-instagram-feed.scss',
  shadow: true
})
export class CrdsVideo {
  // @Prop() youtubeId: string;
  // @Prop() transcript: string;
  // @Prop() active: boolean;
  // @Prop() theme: string = '';
  // @Prop() shadow: boolean;

  getFeed(){
    debugger
  }

  render() {
    return (
      <div class="feed__container">Instagram Feed!
        <div>Data: {this.getFeed()}</div>
      </div>
    );
  }
}
