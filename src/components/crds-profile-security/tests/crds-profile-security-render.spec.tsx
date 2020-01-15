import { CrdsProfileSecurity } from '../crds-profile-security';

describe('<profile-security-component> Render', () => {
  beforeEach(() => {
    this.greeting = new CrdsProfileSecurity();
    this.greeting.defaultName = 'Boris';
  });

  describe('Tests renderGreeting()', () => {
    it('displays default name if no user is found', () => {
      this.greeting.user = { nickname: null, firstName: null };
      this.greeting.getDisplayName();
      const greet = this.greeting.renderName();
      expect(greet).toContain('Boris');
    });

    it('does display nickname when user nickname is valid', () => {
      this.greeting.user = { firstName: 'first', nickName: 'nick' };
      this.greeting.getDisplayName();
      const greet = this.greeting.renderName();
      expect(greet).toContain('nick');
    });

    it('does display first name when user nickname is invalid', () => {
      this.greeting.user = { nickName: null, firstName: 'first' };
      this.greeting.getDisplayName();
      const greet = this.greeting.renderName();
      expect(greet).toContain('first');
    });

    it('changes greeting with time', () => {
      this.greeting.chunkOfDay = this.greeting.getChunkOfDay(0);
      const timeBasedGreeting = this.greeting.renderGreeting();
      expect(timeBasedGreeting).toContain('Good morning');
    });
  });
});
