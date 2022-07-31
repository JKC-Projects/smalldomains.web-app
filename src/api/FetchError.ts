class FetchError extends Error {
  #errorMessages : string[]
  
  constructor(errorMessages : string[]) {
    super('')
    this.#errorMessages = errorMessages
    Object.setPrototypeOf(this, FetchError.prototype)
  }

  getErrorMessages() : string[] {
    return this.#errorMessages
  }
}

export default FetchError