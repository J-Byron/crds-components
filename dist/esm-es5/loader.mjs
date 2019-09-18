import { a as patchEsm, b as bootstrapLazy } from './core-9036992e.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["crds-media-card", [[1, "crds-media-card", { "contentType": [1, "content-type"], "contentLayout": [1, "content-layout"], "imageSrc": [1, "image-src"], "heading": [1], "meta": [1], "metaPosition": [1, "meta-position"], "body": [1], "buttonSrc": [1, "button-src"], "thumbnailSrc": [1, "thumbnail-src"], "url": [1], "nearestMinute": [1, "nearest-minute"], "author": [1], "mediaTopic": [1, "media-topic"], "contentCount": [2, "content-count"], "isVisible": [32], "childProps": [32] }]]], ["crds-icon", [[1, "crds-icon", { "name": [1], "color": [1], "size": [1] }]]], ["crds-image", [[1, "crds-image", { "src": [1], "size": [1], "imgDidLoad": [32], "cachedImg": [32] }]]], ["nav-link", [[4, "nav-link", { "href": [1], "automationId": [1, "automation-id"], "handleSignOut": [16] }]]], ["crds-default-layout", [[1, "crds-default-layout", { "image": [1], "heading": [1], "meta": [1], "metaPosition": [1, "meta-position"], "body": [1], "src": [1], "thumbnailSRC": [1, "thumbnail-s-r-c"], "url": [1] }]]], ["crds-greeting_16", [[1, "crds-shared-header", { "src": [1], "env": [1], "active": [32], "mainNavIsShowing": [32], "profileNavIsShowing": [32], "giveNavIsShowing": [32], "data": [32] }, [[8, "click", "handleScroll"]]], [1, "crds-snail-trail", { "src": [1], "env": [1], "name": [1], "data": [32] }], [1, "crds-greeting", { "authToken": [1, "auth-token"], "defaultName": [1, "default-name"], "displayName": [32] }], [1, "crds-heart-button", { "storageKey": [1, "storage-key"], "contentfulId": [1, "contentful-id"], "count": [1026], "isLiked": [1028, "is-liked"], "_likes": [32] }], [1, "crds-recommended-content", { "authToken": [1, "auth-token"], "lifeStages": [32], "user": [32] }], [1, "crds-shared-footer", { "src": [1], "env": [1], "data": [32] }], [1, "crds-site-happenings", { "authToken": [1, "auth-token"], "selectedSite": [32] }], [1, "global-nav", { "config": [16], "env": [1], "giveNavIsShowing": [4, "give-nav-is-showing"], "href": [1], "mainNavIsShowing": [4, "main-nav-is-showing"], "navClickHandler": [16], "profileNavIsShowing": [4, "profile-nav-is-showing"], "giveData": [16], "profileData": [16], "authenticated": [32], "offset": [32] }], [1, "crds-subscribe", { "label": [1], "src": [1], "modalIsShowing": [32] }], [1, "crds-snail-trail-link", { "automationId": [1, "automation-id"], "href": [1], "isActive": [1028, "is-active"] }], [1, "nav-ctas", { "href": [1], "active": [1], "data": [1] }], [4, "nav-section", { "slug": [1], "activeSection": [1032, "active-section"], "isActive": [4, "is-active"], "onActivate": [8, "on-activate"] }], [4, "nav-section-subnav", { "active": [1025], "slug": [1], "onBack": [16] }], [1, "crds-modal", { "isActive": [1028, "is-active"], "onModalClose": [16], "label": [1] }], [1, "give-nav", { "giveNavIsShowing": [4, "give-nav-is-showing"], "data": [16] }], [1, "profile-nav", { "profileNavIsShowing": [4, "profile-nav-is-showing"], "data": [16], "currentUser": [8, "current-user"], "handleSignOut": [16] }]]]], options);
    });
};
export { defineCustomElements };
