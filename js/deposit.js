document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const newDepositAmount = getInputFieldValueById("deposit-input");
    const previousDepositTotal = getElementValueById("deposit-total");

    const newDepositTotal = newDepositAmount + previousDepositTotal;
    setTextElementValueById("deposit-total", newDepositTotal);

    const totalBalanceField = getElementValueById("balance-total");
    const totalBalance = totalBalanceField + newDepositAmount;
    setTextElementValueById("balance-total", totalBalance);
  });
