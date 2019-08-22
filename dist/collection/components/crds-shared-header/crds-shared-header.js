import { h } from '@stencil/core';
import Fragment from 'stencil-fragment';
import axios from 'axios';
import { Utils } from '../../shared/utils';
export class SharedHeader {
    constructor() {
        this.env = 'prod';
        this.mainNavIsShowing = false;
        this.profileNavIsShowing = false;
        this.giveNavIsShowing = false;
        this.data = [];
    }
    /**
     * Fires before render...
     */
    componentWillLoad() {
        const url = this.src || `https://crds-data.netlify.com/shared-header/${this.env}.json`;
        axios.get(url).then(response => (this.data = response.data));
    }
    componentDidLoad() {
        this.element.parentElement.classList.add('shared-header');
        this.element.parentElement.classList.remove('shared-header-skeleton');
    }
    /**
     * Section onClick event handler
     * @param e Event
     * @param id string
     */
    onClick(e, id) {
        e.preventDefault();
        this.active = id;
    }
    /**
     * Renders all sections from payload
     */
    renderSections(payload) {
        if (!payload)
            return null;
        return payload.map(section => {
            const id = Utils.parameterize(section.title);
            return (h("nav-section", { slug: id, onActivate: this.onClick.bind(this), isActive: this.active == id },
                h("h2", null, section.title),
                h("p", null, section.description)));
        });
    }
    handleBackClick(event) {
        event.preventDefault();
        this.active = null;
    }
    /**
     * Returns all subnav elements
     * @param payload
     */
    // TODO: refactor renderSubnavs to work with
    // nav-section-subnav, profile nav, and give nav
    // ------------------------------------------------------
    renderSubnavs(payload) {
        if (!payload)
            return null;
        const sections = payload.map(section => {
            return (h("nav-section-subnav", { onBack: this.handleBackClick.bind(this), active: this.active, slug: Utils.parameterize(section.title) }, this.renderChildren(section)));
        });
        return h("div", { class: "subnavigation" }, sections);
    }
    /**
     * Returns header or unordered list
     * @param section
     */
    renderChildren(section) {
        const sectionChildren = section.children.map(child => {
            if (typeof child == 'string') {
                return h("h4", null, child);
            }
            else {
                const listItems = child.map(link => {
                    return (h("li", { class: link.top_level ? 'top-level' : null },
                        h("a", { href: link.href || '#', "data-automation-id": link['automation-id'] }, link.title)));
                });
                return h("ul", null, listItems);
            }
        });
        return (h(Fragment, null,
            h("h2", null, section.title),
            sectionChildren));
    }
    toggleMenu(event, navType) {
        event.preventDefault();
        event.stopPropagation();
        if (navType == 'main-nav') {
            this.giveNavIsShowing = false;
            this.mainNavIsShowing = !this.mainNavIsShowing;
            this.profileNavIsShowing = false;
            if (this.mainNavIsShowing) {
                document.body.setAttribute('style', 'overflow: hidden; position: absolute;');
            }
            else {
                document.body.setAttribute('style', 'overflow: scroll;');
            }
        }
        else if (navType == 'profile-nav') {
            this.giveNavIsShowing = false;
            this.mainNavIsShowing = false;
            this.profileNavIsShowing = !this.profileNavIsShowing;
            return this.profileNavIsShowing
                ? document.body.setAttribute('style', 'overflow: hidden; position: absolute; width: 100vw;')
                : document.body.setAttribute('style', 'overflow: scroll;');
        }
        else if (navType == 'give-nav') {
            this.giveNavIsShowing = !this.giveNavIsShowing;
            this.mainNavIsShowing = false;
            this.profileNavIsShowing = false;
            return this.giveNavIsShowing
                ? document.body.setAttribute('style', 'overflow: hidden; position: absolute; width: 100vw;')
                : document.body.setAttribute('style', 'overflow: scroll; ');
        }
    }
    closeMenus(event) {
        event.preventDefault();
        this.giveNavIsShowing = false;
        this.mainNavIsShowing = false;
        this.profileNavIsShowing = false;
        return document.body.setAttribute('style', 'overflow: scroll;');
    }
    navClasses() {
        let classes = [];
        if (this.mainNavIsShowing)
            classes.push('is-showing');
        if (this.active)
            classes.push(`section--${this.active}`);
        if (this.profileNavIsShowing || this.giveNavIsShowing)
            classes = [];
        return classes.join(' ');
    }
    navCloseClasses() {
        let classes = ['close'];
        if (this.mainNavIsShowing || this.profileNavIsShowing || this.giveNavIsShowing)
            classes.push('is-showing');
        return classes.join(' ');
    }
    handleScroll(event) {
        if (this.mainNavIsShowing || this.giveNavIsShowing || this.profileNavIsShowing) {
            return document.body.setAttribute('style', 'overflow: scroll;'), this.closeMenus(event);
        }
    }
    /**
     * HTML
     */
    render() {
        let close = '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" class="svg-inline--fa fa-times fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>';
        return (h(Fragment, null,
            h("global-nav", { mainNavIsShowing: this.mainNavIsShowing, profileNavIsShowing: this.profileNavIsShowing, giveNavIsShowing: this.giveNavIsShowing, navClickHandler: this.toggleMenu.bind(this), giveData: this.data.give, profileData: this.data.profile, config: this.data.config, env: this.env }),
            h("nav", { class: this.navClasses(), onClick: event => event.stopPropagation() },
                h("div", { class: "content" },
                    h("div", { class: "navigation" },
                        h("ul", null, this.renderSections(this.data.nav))),
                    this.renderSubnavs(this.data.nav),
                    h("nav-ctas", { active: this.active, data: this.data.promos }))),
            h("div", { class: this.navCloseClasses() },
                h("div", { class: "close-icon", innerHTML: close, onClick: this.closeMenus.bind(this) }))));
    }
    static get is() { return "crds-shared-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["crds-shared-header.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["crds-shared-header.css"]
    }; }
    static get properties() { return {
        "src": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "src",
            "reflect": false
        },
        "env": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "env",
            "reflect": false,
            "defaultValue": "'prod'"
        }
    }; }
    static get states() { return {
        "active": {},
        "mainNavIsShowing": {},
        "profileNavIsShowing": {},
        "giveNavIsShowing": {},
        "data": {}
    }; }
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "click",
            "method": "handleScroll",
            "target": "window",
            "capture": false,
            "passive": false
        }]; }
}