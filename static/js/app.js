var tableData = data;

let tbody = d3.select("tbody");
function buildtable(arr){
arr.forEach(element => {
    let row = tbody.append("tr");
    Object.values(element).forEach(value => {
      row.append("td").text(value);
    });
  });
}
buildtable(tableData)

let textBox = d3.select("#datetime");
let button = d3.select("#filter-btn");
    function Fliter() {
      tbody.html("");
    //let button = d3.select(d3.event.target);
        console.log(textBox.property("value"));
    let new_table = tableData.filter(filterDate => 
        filterDate.datetime== textBox.property("value"))
    buildtable(new_table)  
  }
  
  button.on("click", Fliter);
