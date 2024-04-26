class PLCCommunicationInterface {
  init() {
    throw new Error("init method must be implemented");
  }

  fetchData() {
    throw new Error("fetchData method must be implemented");
  }

  sendData(id, value) {
    throw new Error("sendData method must be implemented");
  }
}

export { PLCCommunicationInterface };