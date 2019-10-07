import { r as registerInstance, h } from './core-a00bdbdd.js';
import { L as Logger, C as Config } from './config-bbebed3f.js';
import './utils-e6bf588f.js';

const NavigationLink = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Print log messages?
         */
        this.debug = true;
    }
    componentWillLoad() {
        this.console = new Logger(this.debug);
        this.config = new Config();
    }
    onClick(event) {
        if (this.isSignOutLink()) {
            if (typeof this.handleSignOut === 'function') {
                this.handleSignOut();
                event.preventDefault();
            }
            else {
                console.error('Function to handle sign out not provided');
            }
        }
        else {
            window.location.href = this.href;
            event.stopPropagation();
        }
    }
    isSignOutLink() {
        return this.automationId === 'sh-sign-out';
    }
    render() {
        return (h("a", { href: this.href || "#", "data-automation-id": this.automationId, onClick: this.onClick.bind(this) }, h("slot", null)));
    }
};

export { NavigationLink as nav_link };
