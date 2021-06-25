// Import stylesheets
import './style.css';

function factorial(n:number):number{
let i:number
let fact:number=1;
for(i=1; i<=n; i++){
  fact *=i;
}
return fact;
}

class ToDo {
  constructor(public description: string){

  }
}
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>${factorial(6)}</h1>`;