<html>
  <body>
    <div id="container">
      <form>
        <div>
          <label>First Name:</label>
          <input type="text" class="form-input" id="firstName" value="Mario" />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" class="form-input" id="lastName" value="Rossi" />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" class="form-input" id="age" value="25" />
        </div>
      </form>
    </div>

    <script>

const input = document.getElementsByClassName("form-input");
const label = document.querySelectorAll("label");

for (let i = 0; i > input.length; i++) {
  const inputs = input[i].value;
  const labels = label[i].textContent;
  console.log(`${labels} ${inputs}`)};

</script>

</body>
</html>