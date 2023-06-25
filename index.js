/**
 * @file mofron-comp-framelblauty/index.js
 * @brief frame labelauty component for mofron
 * @license MIT
 */
const Link  = require('mofron-comp-link');
const Image = require('mofron-comp-image');
const ConfArg   = mofron.class.ConfArg;
const comutl    = mofron.util.common;

module.exports = class extends Link {
    /**
     * initialize component
     * 
     * @param (mixed) 
     *                key-value: component config
     * @short 
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname('IconLink');
            
	    /* init config */

	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts () {
        try {
            super.initDomConts();
	    this.style({ 'display': 'flex' });
            this.icon().size(this.size(),this.size());
	    this.icon().style({ 'margin-left': '0.1rem' });
	    this.child(this.icon());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    size (prm,opt) {
        try {
            let ret = super.size(prm,opt);
            if (undefined !== prm) {
                this.icon().size(prm,prm);
            }
            return ret;
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    icon (prm,cnf) {
        try {
            if ('string' === typeof prm) {
                this.icon().src(prm);
                return;
            }
	    if (undefined !== cnf) { 
	        this.icon().config(cnf);
            }
            return this.innerComp('icon', prm, Image);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
}
/* end of file */
