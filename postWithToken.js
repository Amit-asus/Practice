async function post(url = "", data = {}, token) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch(url, {
    headers: headers,
    method: "post",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`response failed ${response.status}`);
  }

  return await response.json();
}

async function post(url = "", data = {}, token) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch(url, {
    headers: headers,
    method: "post",
    body: JSON.stringify(data),
  })
    .then((resp) => {
      if (!resp.ok) {
        return new Error("${res.status}");
      }

      return resp.json();
    })
    .then((data) => data)
    .catch((err) => {
      console.log(err);
    });
  return await response.json();
}
