// capitalizeFirst.js

function capitalizeFirst(input) {
  return input.length > 0
    ? input
        .trim()
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")
    : "";
}

module.exports = capitalizeFirst;
