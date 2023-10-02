<html>
  <body>
    <div id="container" style="display: flex; align-items: center"></div>

    <script>
  async function toDoList() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    const list = await response.json();
    console.log(list);

    const listContainer = document.createElement("ul");
    document.getElementById("container").appendChild(listContainer);

    list.forEach((el) => {
      const listing = document.createElement("li");
      listContainer.appendChild(listing);
      listing.innerText = el.title;
    });
  }
  toDoList();
</script>

  </body>
</html>

