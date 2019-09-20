import { a as patchEsm, b as bootstrapLazy } from './chunk-a3f529aa.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["crds-heart-button_13",[[1,"crds-shared-header",{"src":[1],"env":[1],"active":[32],"mainNavIsShowing":[32],"profileNavIsShowing":[32],"giveNavIsShowing":[32],"data":[32]},[[8,"click","handleScroll"]]],[1,"crds-snail-trail",{"src":[1],"env":[1],"name":[1],"data":[32]}],[1,"crds-heart-button",{"storageKey":[1,"storage-key"],"contentfulId":[1,"contentful-id"],"count":[1026],"isLiked":[1028,"is-liked"],"_likes":[32]}],[1,"crds-shared-footer",{"src":[1],"env":[1],"data":[32]}],[1,"global-nav",{"config":[16],"env":[1],"giveNavIsShowing":[4,"give-nav-is-showing"],"href":[1],"mainNavIsShowing":[4,"main-nav-is-showing"],"navClickHandler":[16],"profileNavIsShowing":[4,"profile-nav-is-showing"],"giveData":[16],"profileData":[16],"authenticated":[32]}],[1,"crds-subscribe",{"label":[1],"src":[1],"modalIsShowing":[32]}],[1,"crds-snail-trail-link",{"automationId":[1,"automation-id"],"href":[1],"isActive":[1028,"is-active"]}],[1,"nav-ctas",{"href":[1],"active":[1],"data":[1]}],[4,"nav-section",{"slug":[1],"activeSection":[1032,"active-section"],"isActive":[4,"is-active"],"onActivate":[8,"on-activate"]}],[4,"nav-section-subnav",{"active":[1025],"slug":[1],"onBack":[16]}],[1,"crds-modal",{"isActive":[1028,"is-active"],"onModalClose":[16],"label":[1]}],[1,"give-nav",{"giveNavIsShowing":[4,"give-nav-is-showing"],"data":[16]},[[0,"click","handleClick"]]],[1,"profile-nav",{"config":[8],"currentUser":[8,"current-user"],"onSignOut":[16],"profileNavIsShowing":[4,"profile-nav-is-showing"],"data":[16]},[[0,"click","handleClick"]]]]]], options);
  });
};

export { defineCustomElements };
