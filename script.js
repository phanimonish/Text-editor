$("#font-family").on("change", function (e) {
  console.log(e.target.value);
  $("#data").css("font-family", e.target.value);
});

$("#font-size").on("change", function (e) {
  console.log(e.target.value);
  $("#data").css("font-size", Number(e.target.value));
});

$("#fs-dec").on("click", function (e) {
  let v = Math.max(1, Number($("#font-size").val()) - 1);
  $("#font-size").val(v);
  $("#data").css("font-size", Number(v));
});

$("#fs-inc").on("click", function (e) {
  let v = Number($("#font-size").val()) + 1;
  $("#font-size").val(v);
  $("#data").css("font-size", Number(v));
});

$("#i-bold").on("click", function (e) {
  if ($("#data").css("font-weight") === "700") {
    $("#data").css("font-weight", "400");
  } else {
    $("#data").css("font-weight", "700");
  }
});

$("#i-italic").on("click", function (e) {
  if ($("#data").css("font-style") === "italic") {
    $("#data").css("font-style", "normal");
  } else {
    $("#data").css("font-style", "italic");
  }
});

$("#i-underline").on("click", function (e) {
  if ($("#data").css("text-decoration").split(" ")[0] === "underline") {
    $("#data").css("text-decoration", "none");
  } else {
    $("#data").css("text-decoration", "underline");
  }
});

$("#i-left").on("click", function (e) {
  $("#data").css("text-align", "left");
});

$("#i-center").on("click", function (e) {
  $("#data").css("text-align", "center");
});

$("#i-right").on("click", function (e) {
  $("#data").css("text-align", "right");
});

$("#i-justify").on("click", function (e) {
  $("#data").css("text-align", "justify");
});

$("#color").on("change", function (e) {
  $("#data").css("color", e.target.value);
});
