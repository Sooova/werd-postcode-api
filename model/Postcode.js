class Postcode {
    constructor(id, state, postcode, locality) {
        this.id = id;
        this.state = state;
        this.postcode = postcode;
        this.locality = locality;
    }

    getResponseObject() {
        return {
            state: this.state,
            postcode: this.postcode,
            locality: this.locality
        }
    }
}

module.exports = Postcode;