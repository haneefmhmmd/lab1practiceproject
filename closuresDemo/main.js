function parent() {
  const message = "Hello World";

  function child() {
    alert(message);
  }

  child();
}
parent();

function parent2() {
  const message = "Hello World";

  function child() {
    alert(message);
  }

  return child;
}

const childFN = parent2();
childFN();
