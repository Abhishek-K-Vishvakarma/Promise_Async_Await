async function FunName(){
  let item = await fetch('https://jsonplaceholder.typicode.com/users');
  item = await item.json();
  console.log(item);
}
FunName();

