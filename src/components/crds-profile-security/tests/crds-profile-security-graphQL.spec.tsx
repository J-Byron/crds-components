import { CrdsProfileSecurity } from '../crds-profile-security';
import { getSessionID, user_with_nickname } from '../../../shared/test_users_auth';
import { ReplaySubject } from 'rxjs';
import { authInit } from '../../../global/authInit';
import { CrdsApolloService } from '../../../shared/apollo';

describe('<profile-security-component> GraphQL', () => {
  beforeEach(async () => {
    this.profileSecurityComponent = new CrdsProfileSecurity();
    this.lastError = {};
    this.skip = false;
    this.profileSecurityComponent.logError = err => {
      this.lastError.error = err;
    };

    if(user_with_nickname.password === 'skip'){
      this.skip = true;
    } else {
      const authToken = await getSessionID(user_with_nickname.email, user_with_nickname.password);
      window['apolloClient'] = new ReplaySubject();
      authInit(authToken);
      await CrdsApolloService.subscribeToApolloClient();
      this.profileSecurityComponent.CrdsApolloService = CrdsApolloService;
    }
  });

  describe('Tests getUser() with nickname', () => {
    it('checks that first name and nickname of user without nickname set are different', async () => {
      if(this.skip) {
        console.log("skipping test in production");
        return;
      } else {
        await this.profileSecurityComponent.getUser();
        expect(this.profileSecurityComponent.user.firstName).toBe('Leia');
        expect(this.profileSecurityComponent.user.nickName).toBe('Princess');
      }
    });
  });
});
