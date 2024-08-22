function sortNumberSmall(arr) {
  console.log("Sorted numbers:");
  return startProgram();
}

function sortNumberBig(arr) {
  console.log("Sorted numbers:");
  return startProgram();
}

function sortByName(arr) {
  console.log("Sorted words: ");
  return startProgram();
}
function sortByQuantity(arr) {
  console.log("Sorted words: ");
  return startProgram();
}

function sortByUnique(arr) {
  console.log("Sorted words: ");
  return startProgram();
}

function sortArr(value) {
  process.stdin.once;
}

function startProgram() {
  console.log(
    "Hello! Enter 10 words or digits deviding them in spaces: mango polly apple girl some true great 45 56 nice"
  );
  process.stdin.once("data", (input) => {
    const inputValue = input.toString().trim();
    if (inputValue === "exit") {
      process.stdin.pause();
    } else {
      const arrWords = inputValue.split(" ");
      if (arrWords.length <= 9) {
        console.log(
          `Please enter 10 words or digits. You are enter ${arrWords.length} words or digits`
        );
        return startProgram();
      }

      if (arrWords.length >= 10) {
        console.log(`How would you like to sort values:
      1. Words by name (from A to Z).
      2. Show digits from the smallest.
      3. Show digits from the bigest.
      4. Words by quantity of leters.
      5. Only unique words.

      Select (1 - 5) and press enter: `);
        sortArr(arrWords);
      }
    }
  });
}
startProgram();
