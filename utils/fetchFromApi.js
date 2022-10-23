const FetchFromApi = {
  get: (url) => {
    return fetch(url);
  },
  post: (url, data) => {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  },
};

export default FetchFromApi;
