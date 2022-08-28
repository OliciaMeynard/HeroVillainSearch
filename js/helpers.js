export const getJSON = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok)
      throw new Error(
        `error from the other side ${data.message} (${data.status})`
      );
    return data;
  } catch (err) {
    alert(err);
  }
};
