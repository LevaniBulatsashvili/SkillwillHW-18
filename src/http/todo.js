export const getTodos = async (http, key) => {
  try {
    const res = await fetch(http, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
    });
    if (!res.ok) throw Error("Fetch Failed!");

    const data = await res.json();

    return data.items;
  } catch (err) {
    console.log(err);
  }
};

export const postTodos = async (http, key, body) => {
  try {
    const res = await fetch(http, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw Error("Fetch Failed!");

    const data = await res.json();
    return data.items[0];
  } catch (err) {
    console.log(err);
  }
};
