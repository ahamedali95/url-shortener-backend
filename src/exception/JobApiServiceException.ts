class JobApiServiceException extends Error {
    constructor(message: string) {
        super(`Muse job api failed:: ${message}`);
    }
}

export default JobApiServiceException;