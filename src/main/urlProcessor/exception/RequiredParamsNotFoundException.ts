class RequiredParamsNotFoundException extends Error {
    constructor(message: string) {
        super(message);
    }
}

export default RequiredParamsNotFoundException;