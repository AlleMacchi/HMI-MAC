class CommunicationInterface {
  async init() {
    throw new Error("init method must be implemented");
  }

  async fetchData() {
    throw new Error("fetchData method must be implemented");
  }
}

export { CommunicationInterface };