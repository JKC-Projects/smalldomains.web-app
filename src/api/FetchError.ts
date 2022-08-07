class FetchError extends Error {
  #errorMessage : string
  
  constructor(errorMessage : string) {
    super(errorMessage)
    this.#errorMessage = errorMessage
    Object.setPrototypeOf(this, FetchError.prototype)
  }

  getErrorMessage() : string {
    return this.#errorMessage
  }
}

export default FetchError