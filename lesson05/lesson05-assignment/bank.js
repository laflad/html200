let currentBalance = 1018.37;

function catBank() {
  let userPrompt = prompt("Paw in a selection:\n W = Withdrawal from your account\n D = Deposit to your account\n B = Balance of your account\n Q = Quit the page");

  switch (userPrompt) {
    case 'W':
    case 'w':
    case 'Withdraw':
    case 'withdraw':
      function withdrawFunds() {
        let withdrawAmount = parseFloat(prompt("How much would you like to withdraw?"));
        currentBalance = currentBalance - withdrawAmount;
        console.log("Withdraw: $" + withdrawAmount + "; New balance: $" + currentBalance);
      }
      withdrawFunds();
      catBank();
      break;

    case "D":
    case "d":
    case "Deposit":
    case "deposti":
      function depositFunds() {
        let depositAmount = Number(prompt("Enter your deposit amount:"));
        currentBalance = currentBalance + depositAmount;
      }
      depositFunds();
      catBank();
      break;

    case "B":
    case "b":
    case "Balance":
    case "balance":
      function checkBalance() {
        alert(`Your cat cash balance is $ ${currentBalance}`);
      }
      checkBalance();
      catBank();
      break;

    case "Q":
    case "q":
    case "Quit":
    case "quit":
      function quitProgram() {
        let quit = "Quit the purrgram.";
        confirm('Are you sure you want to quit')
      }
      quitProgram();
      break;

    default:
      alert("That is not a valid menu option, please choose again.");
  }
}