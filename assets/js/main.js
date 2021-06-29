(() => {
  /* ===== Screen ============================== */
  const screen = document.querySelector("[data-screen]");

  /* ===== Keys ============================== */
  const btnResult = document.querySelector("[data-result]");
  const btnCleanScreen = document.querySelector("[data-cleanScreen]");
  const btnDeletePrevious = document.querySelector("[data-deletePrevious]");

  /* ===== Number ============================== */
  const listenerBtn = document.querySelectorAll("[data-btn]");

  listenerBtn.forEach((event) =>
    event.addEventListener("click", passScreenValue)
  );

  /* ===== Check keys Start ============================== */
  function Check() {
    return (auxiliary = screen.value.substring(
      screen.value.length - 1,
      screen.value.length
    ));
  }
  /* ===== Check keys End ============================== */

  /* ===== Click event Start ============================== */
  function passScreenValue(event) {
    if (checkOperator(event.currentTarget.value)) {
      if (checkOperator(Check())) deletePrevious();
    }
    if (event.currentTarget.value) screen.value += event.currentTarget.value;
  }
  /* ===== Click event End ============================== */

  /* ===== Check Result Start ============================== */
  btnResult.addEventListener("click", checkResult);

  function checkResult() {
    try {
      Check();
      const calculatedValue = eval(screen.value);
      if (checkOperator(auxiliary)) deletePrevious();
      if (calculatedValue || calculatedValue === "0") {
        screen.value = calculatedValue;
      } else {
        throw "Valor incorreto";
      }
    } catch (e) {
      console.error(e);
    }
  }
  /* ===== Check Result End ============================== */

  /* ===== Check switch Start ============================== */
  function checkOperator(value) {
    switch (value) {
      case "+":
        return true;
      case "-":
        return true;
      case "*":
        return true;
      case "/":
        return true;

      default:
        return false;
    }
  }
  /* ===== Check switch End ============================== */

  /* ===== Delete Previous Start ============================== */
  btnDeletePrevious.addEventListener("click", deletePrevious);
  function deletePrevious() {
    const auxiliary = screen.value.substring(0, screen.value.length - 1);
    if (screen.value.length > 0) screen.value = auxiliary;
  }
  /* ===== Delete Previous End ============================== */

  /* ===== Limpar Tela ============================== */
  btnCleanScreen.addEventListener("click", () => (screen.value = ""));

  /* ===== Colors ============================== */

  /* ===== Capturando Elementos ============================== */
  const colorOne = document.querySelector("[data-colorOne]");
  const colorTwo = document.querySelector("[data-colorTwo]");
  const colorThree = document.querySelector("[data-colorThree]");
  const switchoff = document.querySelector("[data-colorFour]");
  const colors = document.querySelectorAll(".colorFull");
  /* ===== Função adicionando Classes ============================== */
  const handleColor = (activeColor, removeColorOne, removeColorTwo) => {
    colors.forEach((elemento) => {
      elemento.classList.add(activeColor);
      elemento.classList.remove(removeColorOne);
      elemento.classList.remove(removeColorTwo);
    });
  };
  /* ===== Função removendo Classes ============================== */
  const removeAll = (element, colors) => element.forEach((el) => el.classList.remove(...colors));
  /* ===== Executando Funções ============================== */
  colorOne.addEventListener("click", () => handleColor("activeOne", "activeTwo", "activeThree"));
  colorTwo.addEventListener("click", () => handleColor("activeTwo", "activeOne", "activeThree"));
  colorThree.addEventListener("click", () => handleColor("activeThree", "activeTwo", "activeOne"));
  switchoff.addEventListener("click", () => removeAll(colors, ["activeOne", "activeTwo", "activeThree"]));

})();
