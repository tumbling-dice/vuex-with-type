const actions = {
  async search({
    commit
  }, payload) {
    const body = JSON.stringify(payload);
    const resp = await fetch("/search", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body
    });
    commit("setResult", resp.json());
  }
}

export default actions;