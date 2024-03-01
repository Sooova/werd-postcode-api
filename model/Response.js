class Response {
    constructor(){
        this.data = {
            success: {
                count: 0,
                data: []
            },
            errors: {
                count: 0,
                data: []
            }, 
        }
    }

    addData(data){
        this.data.success.count++;
        this.data.success.data.push(data);
    }

    addError(error){
        this.data.errors.count++;
        this.data.errors.data.push(error);
    }

    getResponse(){
        return this.data;
    }
}

module.exports = Response;