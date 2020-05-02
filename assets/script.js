sayHiTo = (name) => {
  alert(`Hello ${name}!`);
}

window.onload = () => {
  let button = Array.from(document.getElementsByTagName('button'))[0];
  console.log(button);

  button.addEventListener('click', (event) => {
    let input = document.getElementById('name');
    sayHiTo(input.value);
  });
};