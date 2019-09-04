/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface CrdsGreeting {
    'authToken': string;
    'defaultName': string;
  }
  interface CrdsHeartButton {
    /**
    * Unique identifier for likeable resource
    */
    'contentfulId': string;
    /**
    * Total number of hearts
    */
    'count': number;
    /**
    * Boolean indicating whether likeable resource has been liked
    */
    'isLiked': boolean;
    /**
    * Cache key for localStorage
    */
    'storageKey': string;
  }
  interface CrdsModal {
    'isActive': boolean;
    'label': string;
    'onModalClose': Function;
  }
  interface CrdsRecommendedContent {
    'authToken': string;
  }
  interface CrdsSharedFooter {
    'env': string;
    'src': string;
  }
  interface CrdsSharedHeader {
    'env': string;
    'src': string;
  }
  interface CrdsSiteHappenings {
    'authToken': string;
  }
  interface CrdsSnailTrail {
    'env': string;
    'name': string;
    'src': string;
  }
  interface CrdsSnailTrailLink {
    'automationId': string;
    'href': string;
    'isActive': boolean;
  }
  interface CrdsSubscribe {
    'label': string;
    'src': string;
  }
  interface GiveNav {
    'data': JSON;
    'isNavShowing': boolean;
  }
  interface GlobalNav {
    'config': Object;
    'data': JSON;
    'env': string;
  }
  interface MainNav {
    'data': JSON;
    'isNavShowing': boolean;
    'promoData': string;
  }
  interface NavCtas {
    'data': string;
  }
  interface NavSection {
    'handleClick': Function;
    'isActive': boolean;
    'sectionName': string;
  }
  interface NavSectionSubnav {
    'handleBackClick': Function;
    'isActive': boolean;
    'subNavName': string;
  }
  interface ProfileNav {
    'currentUser': any;
    'data': JSON;
    'handleSignOut': Function;
    'isNavShowing': boolean;
  }
}

declare global {


  interface HTMLCrdsGreetingElement extends Components.CrdsGreeting, HTMLStencilElement {}
  var HTMLCrdsGreetingElement: {
    prototype: HTMLCrdsGreetingElement;
    new (): HTMLCrdsGreetingElement;
  };

  interface HTMLCrdsHeartButtonElement extends Components.CrdsHeartButton, HTMLStencilElement {}
  var HTMLCrdsHeartButtonElement: {
    prototype: HTMLCrdsHeartButtonElement;
    new (): HTMLCrdsHeartButtonElement;
  };

  interface HTMLCrdsModalElement extends Components.CrdsModal, HTMLStencilElement {}
  var HTMLCrdsModalElement: {
    prototype: HTMLCrdsModalElement;
    new (): HTMLCrdsModalElement;
  };

  interface HTMLCrdsRecommendedContentElement extends Components.CrdsRecommendedContent, HTMLStencilElement {}
  var HTMLCrdsRecommendedContentElement: {
    prototype: HTMLCrdsRecommendedContentElement;
    new (): HTMLCrdsRecommendedContentElement;
  };

  interface HTMLCrdsSharedFooterElement extends Components.CrdsSharedFooter, HTMLStencilElement {}
  var HTMLCrdsSharedFooterElement: {
    prototype: HTMLCrdsSharedFooterElement;
    new (): HTMLCrdsSharedFooterElement;
  };

  interface HTMLCrdsSharedHeaderElement extends Components.CrdsSharedHeader, HTMLStencilElement {}
  var HTMLCrdsSharedHeaderElement: {
    prototype: HTMLCrdsSharedHeaderElement;
    new (): HTMLCrdsSharedHeaderElement;
  };

  interface HTMLCrdsSiteHappeningsElement extends Components.CrdsSiteHappenings, HTMLStencilElement {}
  var HTMLCrdsSiteHappeningsElement: {
    prototype: HTMLCrdsSiteHappeningsElement;
    new (): HTMLCrdsSiteHappeningsElement;
  };

  interface HTMLCrdsSnailTrailElement extends Components.CrdsSnailTrail, HTMLStencilElement {}
  var HTMLCrdsSnailTrailElement: {
    prototype: HTMLCrdsSnailTrailElement;
    new (): HTMLCrdsSnailTrailElement;
  };

  interface HTMLCrdsSnailTrailLinkElement extends Components.CrdsSnailTrailLink, HTMLStencilElement {}
  var HTMLCrdsSnailTrailLinkElement: {
    prototype: HTMLCrdsSnailTrailLinkElement;
    new (): HTMLCrdsSnailTrailLinkElement;
  };

  interface HTMLCrdsSubscribeElement extends Components.CrdsSubscribe, HTMLStencilElement {}
  var HTMLCrdsSubscribeElement: {
    prototype: HTMLCrdsSubscribeElement;
    new (): HTMLCrdsSubscribeElement;
  };

  interface HTMLGiveNavElement extends Components.GiveNav, HTMLStencilElement {}
  var HTMLGiveNavElement: {
    prototype: HTMLGiveNavElement;
    new (): HTMLGiveNavElement;
  };

  interface HTMLGlobalNavElement extends Components.GlobalNav, HTMLStencilElement {}
  var HTMLGlobalNavElement: {
    prototype: HTMLGlobalNavElement;
    new (): HTMLGlobalNavElement;
  };

  interface HTMLMainNavElement extends Components.MainNav, HTMLStencilElement {}
  var HTMLMainNavElement: {
    prototype: HTMLMainNavElement;
    new (): HTMLMainNavElement;
  };

  interface HTMLNavCtasElement extends Components.NavCtas, HTMLStencilElement {}
  var HTMLNavCtasElement: {
    prototype: HTMLNavCtasElement;
    new (): HTMLNavCtasElement;
  };

  interface HTMLNavSectionElement extends Components.NavSection, HTMLStencilElement {}
  var HTMLNavSectionElement: {
    prototype: HTMLNavSectionElement;
    new (): HTMLNavSectionElement;
  };

  interface HTMLNavSectionSubnavElement extends Components.NavSectionSubnav, HTMLStencilElement {}
  var HTMLNavSectionSubnavElement: {
    prototype: HTMLNavSectionSubnavElement;
    new (): HTMLNavSectionSubnavElement;
  };

  interface HTMLProfileNavElement extends Components.ProfileNav, HTMLStencilElement {}
  var HTMLProfileNavElement: {
    prototype: HTMLProfileNavElement;
    new (): HTMLProfileNavElement;
  };
  interface HTMLElementTagNameMap {
    'crds-greeting': HTMLCrdsGreetingElement;
    'crds-heart-button': HTMLCrdsHeartButtonElement;
    'crds-modal': HTMLCrdsModalElement;
    'crds-recommended-content': HTMLCrdsRecommendedContentElement;
    'crds-shared-footer': HTMLCrdsSharedFooterElement;
    'crds-shared-header': HTMLCrdsSharedHeaderElement;
    'crds-site-happenings': HTMLCrdsSiteHappeningsElement;
    'crds-snail-trail': HTMLCrdsSnailTrailElement;
    'crds-snail-trail-link': HTMLCrdsSnailTrailLinkElement;
    'crds-subscribe': HTMLCrdsSubscribeElement;
    'give-nav': HTMLGiveNavElement;
    'global-nav': HTMLGlobalNavElement;
    'main-nav': HTMLMainNavElement;
    'nav-ctas': HTMLNavCtasElement;
    'nav-section': HTMLNavSectionElement;
    'nav-section-subnav': HTMLNavSectionSubnavElement;
    'profile-nav': HTMLProfileNavElement;
  }
}

declare namespace LocalJSX {
  interface CrdsGreeting extends JSXBase.HTMLAttributes<HTMLCrdsGreetingElement> {
    'authToken'?: string;
    'defaultName'?: string;
  }
  interface CrdsHeartButton extends JSXBase.HTMLAttributes<HTMLCrdsHeartButtonElement> {
    /**
    * Unique identifier for likeable resource
    */
    'contentfulId'?: string;
    /**
    * Total number of hearts
    */
    'count'?: number;
    /**
    * Boolean indicating whether likeable resource has been liked
    */
    'isLiked'?: boolean;
    /**
    * Cache key for localStorage
    */
    'storageKey'?: string;
  }
  interface CrdsModal extends JSXBase.HTMLAttributes<HTMLCrdsModalElement> {
    'isActive'?: boolean;
    'label'?: string;
    'onModalClose'?: Function;
  }
  interface CrdsRecommendedContent extends JSXBase.HTMLAttributes<HTMLCrdsRecommendedContentElement> {
    'authToken'?: string;
  }
  interface CrdsSharedFooter extends JSXBase.HTMLAttributes<HTMLCrdsSharedFooterElement> {
    'env'?: string;
    'src'?: string;
  }
  interface CrdsSharedHeader extends JSXBase.HTMLAttributes<HTMLCrdsSharedHeaderElement> {
    'env'?: string;
    'src'?: string;
  }
  interface CrdsSiteHappenings extends JSXBase.HTMLAttributes<HTMLCrdsSiteHappeningsElement> {
    'authToken'?: string;
  }
  interface CrdsSnailTrail extends JSXBase.HTMLAttributes<HTMLCrdsSnailTrailElement> {
    'env'?: string;
    'name'?: string;
    'src'?: string;
  }
  interface CrdsSnailTrailLink extends JSXBase.HTMLAttributes<HTMLCrdsSnailTrailLinkElement> {
    'automationId'?: string;
    'href'?: string;
    'isActive'?: boolean;
  }
  interface CrdsSubscribe extends JSXBase.HTMLAttributes<HTMLCrdsSubscribeElement> {
    'label'?: string;
    'src'?: string;
  }
  interface GiveNav extends JSXBase.HTMLAttributes<HTMLGiveNavElement> {
    'data'?: JSON;
    'isNavShowing'?: boolean;
  }
  interface GlobalNav extends JSXBase.HTMLAttributes<HTMLGlobalNavElement> {
    'config'?: Object;
    'data'?: JSON;
    'env'?: string;
  }
  interface MainNav extends JSXBase.HTMLAttributes<HTMLMainNavElement> {
    'data'?: JSON;
    'isNavShowing'?: boolean;
    'promoData'?: string;
  }
  interface NavCtas extends JSXBase.HTMLAttributes<HTMLNavCtasElement> {
    'data'?: string;
  }
  interface NavSection extends JSXBase.HTMLAttributes<HTMLNavSectionElement> {
    'handleClick'?: Function;
    'isActive'?: boolean;
    'sectionName'?: string;
  }
  interface NavSectionSubnav extends JSXBase.HTMLAttributes<HTMLNavSectionSubnavElement> {
    'handleBackClick'?: Function;
    'isActive'?: boolean;
    'subNavName'?: string;
  }
  interface ProfileNav extends JSXBase.HTMLAttributes<HTMLProfileNavElement> {
    'currentUser'?: any;
    'data'?: JSON;
    'handleSignOut'?: Function;
    'isNavShowing'?: boolean;
  }

  interface IntrinsicElements {
    'crds-greeting': CrdsGreeting;
    'crds-heart-button': CrdsHeartButton;
    'crds-modal': CrdsModal;
    'crds-recommended-content': CrdsRecommendedContent;
    'crds-shared-footer': CrdsSharedFooter;
    'crds-shared-header': CrdsSharedHeader;
    'crds-site-happenings': CrdsSiteHappenings;
    'crds-snail-trail': CrdsSnailTrail;
    'crds-snail-trail-link': CrdsSnailTrailLink;
    'crds-subscribe': CrdsSubscribe;
    'give-nav': GiveNav;
    'global-nav': GlobalNav;
    'main-nav': MainNav;
    'nav-ctas': NavCtas;
    'nav-section': NavSection;
    'nav-section-subnav': NavSectionSubnav;
    'profile-nav': ProfileNav;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


