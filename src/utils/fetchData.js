async function fetchData(url, setData, setLoading, setError) {
  try {
    setLoading(true);
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    setData(data);
  } catch (error) {
    console.error("There was an error loading the data:", error);
    if (setError) setError(error);
  } finally {
    setLoading(false);
  }
}

export default fetchData;
