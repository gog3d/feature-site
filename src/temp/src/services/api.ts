export const getCourses = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (response.ok) {
      const result = await response.json()
      console.log(result);
    }
  } catch (err) {
    console.log(err);
  }
};
