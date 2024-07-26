function createPythagorasTable() {
  const size = 10;

  const container = document.createElement("div");
  container.id = "table-container";

  document.body.appendChild(container);

  const table = document.createElement("table");

  for (let i = 1; i <= size; i++) {
    const row = document.createElement("tr");
    for (let j = 1; j <= size; j++) {
      const cell = document.createElement(i === 1 || j === 1 ? "th" : "td");
      cell.textContent = i * j;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  container.appendChild(table);
}

createPythagorasTable();