import { Component, Prop, State, Element, Watch, h } from '@stencil/core';
import { User } from './crds-quiz.interface';
import { HTMLStencilElement } from '@stencil/core/internal';
import { GET_USER } from './crds-quiz.graphql';
import { CrdsApolloService } from '../../shared/apollo';
import { isAuthenticated } from '../../global/authInit';
import { ContentBlockHandler } from '../../shared/contentBlocks/contentBlocks';

@Component({
  tag: 'crds-quiz',
  styleUrl: 'crds-quiz.scss',
  shadow: true
})
export class CrdsQuiz {
  private user: User;
  private contentBlockHandler: ContentBlockHandler;

  @Prop() contentID: string; //For use with fetching/storing data for this specific quiz
  @Element() public host: HTMLStencilElement;

  public async componentWillLoad() {
    await CrdsApolloService.subscribeToApolloClient();
    this.contentBlockHandler = new ContentBlockHandler(
      CrdsApolloService.apolloClient,
      'Your Content Block Category Here'
    ); //You may not need this if you aren't using content blocks
    return Promise.all([this.contentBlockHandler.getCopy(), isAuthenticated() ? this.getUser() : null]);
  }

  private getUser() {
    return CrdsApolloService.apolloClient.query({ query: GET_USER }).then(response => {
      this.user = response.data.user;
    });
  }

  public render() {
    return (
      <div>
        Here is your quiz content! Add the third party implementation here! 
        
        And you can use isAuthenticated to check if
        a user is signed in. Authed: {isAuthenticated().toString()}. 
        
        Also here is the user's email address: {this.user.email}.
      </div>
    );
  }
}
