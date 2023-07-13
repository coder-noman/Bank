document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const newWithdrawAmount = getInputFieldValueById("withdraw-input");
    const previousWithdrawTotal = getElementValueById("withdraw-total");
    const totalBalanceField = getElementValueById("balance-total");

    if (newWithdrawAmount > totalBalanceField) {
      alert("Balance Insufficient!");
      return;
    }

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById("withdraw-total", newWithdrawTotal);

    

    const totalBalance = totalBalanceField - newWithdrawAmount;
    setTextElementValueById("balance-total", totalBalance);
  });
