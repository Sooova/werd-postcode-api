const Postcode = require('./Postcode');
class PostCodes {
    constructor() {
        this.postcodes = [];
    }

    addPostcode(postcode) {
        this.postcodes.push(postcode);
    }

    getPostcodeByPostcode(postcode) {
        return this.postcodes.find(p => p.postcode === postcode);
    }

    loadPostcodesByJSON(json) {
        for (const entry of json) {
            this.addPostcode(new Postcode(entry.id, entry.state, entry.postcode, entry.locality));
        }
    }
}

module.exports = PostCodes;