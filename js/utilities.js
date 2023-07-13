function getInputFieldValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}
function getElementValueById(elementId) {
  const elementField = document.getElementById(elementId);
  const elementFieldValueString = elementField.innerText;
  const elementFieldValue = parseFloat(elementFieldValueString);
  return elementFieldValue;
}
function setTextElementValueById(elementId, newValue) {
  if (isNaN(newValue)) {
    const inputField = document.getElementById(inputId);
    inputField.value = "";
    return;
  }
  const elementField = document.getElementById(elementId);
  elementField.innerText = newValue;
}
