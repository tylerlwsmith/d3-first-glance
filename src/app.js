import * as d3 from "d3";

const data = ["hello world", "goodbye earth"];

function render() {
  d3.select("#app")
    .selectAll("div")
    .data(data, (data) => data)
    .join(
      (enter) => enter.append("div").style("font-size", "0px"),
      (update) => update,
      (exit) => exit.transition().style("font-size", "0px")
    )
    .text((data) => data)
    .transition()
    .style("font-size", "16px");
}

document.getElementById("add").addEventListener("click", function () {
  data.push(Date());
  render();
});

document.getElementById("remove").addEventListener("click", function () {
  data.pop();
  render();
});

render();
