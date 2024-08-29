function fetchData(url) {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        console.log(
            `Successfully received data:`,
             data);
      })
      .catch((error) => {
        console.error(
            `There was a problem with the fetch request:`,
             error.message)
      });
  }
  
  fetchData("https://jsonplaceholder.typicode.com/posts/1");
  fetchData("https://jsonplaceholder.typicode.com/comments/1");
  fetchData("https://jsonplaceholder.typicode.com/albums/1");
  fetchData("https://jsonplaceholder.typicode.com/photos/1");
  fetchData("https://jsonplaceholder.typicode.com/todos/1");
  fetchData("https://jsonplaceholder.typicode.com/users/1");