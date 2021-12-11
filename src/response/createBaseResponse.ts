class BaseError {
    private systemErrors: string[] = [];
    private message = '';

    getMessage(): string {
        return this.message;
    }

    setMessage(error: string): void {
        this.message = error;
    }

    getErrorMessages(): string[] {
        return this.systemErrors;
    }

    addSystemError(error: string): void {
        this.systemErrors.push(error);
    }
}

class BaseResponse<T> {
    private data: T | null = null;
    private error = new BaseError();

    setData(data: T): void {
        this.data = data;
    }

    setError(error: string): void {
        this.error.setMessage(error);
    }

    addSystemError(error: string): void {
        this.error.addSystemError(error);
    }
}


export default BaseResponse;