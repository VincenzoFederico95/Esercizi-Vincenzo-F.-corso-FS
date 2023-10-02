<html>
  <body>
    <div id="container" style="display: flex; align-items: center"></div>
  </body>

  <script>
  async function implementationOfFourId() {
    try {
      const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/4"
    );
    const javascriptObj = await response.json();
    const title = document.createElement("h2");
    title.innerText = javascriptObj.title;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = javascriptObj.completed;
    const container = document.getElementById("container");
    container.append(title, checkbox);
    } catch (error) {
      console.log("An error occurred:", error);
    }
   
  }

  implementationOfFourId();
</script>
</html>

