// Part 1

// const grid = $(".grid");

// for (let i = 0; i < 64; i++) {
//   let newDiv = $("<div class = 'cell' ></div>");
//   grid.append(newDiv);
// }
// All above is placed in makeGrid function.

// const PALETTE = ["red", "blue", "green", "purple", "black", "yellow", "orange"];

// for (let i = 0; i < PALETTE.length; i++) {
//   const color = PALETTE[i];
//   let button = $("<button></button>");
//   button.css("background-color", color);
//   $(".palette").append(button);
// }
// All above is placed in the makePalette function.

// Part 2

function makePalette() {
  const PALETTE = [
    "Lavender",
    "Thistle",
    "Plum",
    "Orchid",
    "violet",
    "Fuchsia",
    "Magenta",
    "MediumOrchid",
    "DarkOrchid",
    "DarkViolet",
    "BlueViolet",
    "DarkMagenta",
    "Purple",
    "MediumPurple",
    "MediumSlateBlue",
    "SlateBlue",
    "DarkSlateBlue",
    "RebeccaPurple",
    "Indigo",
  ];

  for (let i = 0; i < PALETTE.length; i++) {
    const color = PALETTE[i];
    let button = $("<button></button>");
    button.css("background-color", color);
    $(".palette").append(button);

    $(".palette button").first().addClass("active");
  }
}
makePalette();

function makeGrid() {
  const grid = $(".grid");

  for (let i = 0; i < 64; i++) {
    let newDiv = $("<div class = 'cell' ></div>");
    grid.append(newDiv);
  }
}
makeGrid();

function onPaletteClick() {
  // code goes here

  $(".palette button").removeClass("active");

  $(".palette button").click(function () {
    let click = $(this);
    click.addClass("active");
  });
}

$(".palette button").click(onPaletteClick);

function onGridClick() {
  let activeColor = $(".palette .active").css("background-color");
  let cellColor = $(this).css("background-color");

  if (activeColor === cellColor) {
    $(this).css("background-color", "");
  } else {
    $(this).css("background-color", activeColor);
  }
}

$(".grid .cell").click(onGridClick);

// Part 3

function clearOnClick() {
  $(".grid .cell").css("background-color", "");
}
$(".controls .clear").click(clearOnClick);

function onFillAllClick() {
  let color = $(".palette .active").css("background-color");
  $(".grid .cell").css("background-color", color);
}
$(".controls .fill-all").click(onFillAllClick);

function onFillEmptyClick() {
  let color = $(".palette .active").css("background-color");

  const elements = $(".grid .cell");

  for (let i = 0; i < elements.length; i++) {
    let nextElement = $(elements[i]);

    if (nextElement.css("background-color") === "rgba(0, 0, 0, 0)") {
      nextElement.css("background-color", color);
    }
  }
}
$(".controls .fill-empty").click(onFillEmptyClick);
