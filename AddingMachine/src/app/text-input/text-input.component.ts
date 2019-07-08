import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  answer:number = 0;
  calculate(first:string){
    let ops: Array<string> = new Array;
    let vals: Array<number>= new Array;
    


    let tokens: Array<string> = first.split(" ");
    for (var token of tokens) {
      if      (token == "(")  {continue;}
      else if (token=="+")    ops.push(token);
      else if (token=="-")   ops.push(token);
      else if (token=="*")    ops.push(token);
      else if (token=="/")    ops.push(token);
      else if (token=="sqrt") ops.push(token);
      else if (token==")") {
           let op: string = ops.pop();
          let v:number = vals.pop();
          if      (op==("+"))    v = vals.pop() + v;
          else if (op==("-"))    v = vals.pop() - v;
          else if (op==("*"))    v = vals.pop() * v;
          else if (op==("/"))    v = vals.pop() / v;
          else if (op==("sqrt")) v = Math.sqrt(v);
          vals.push(v);
      }
      else vals.push(Number.parseFloat(token));
      
      
  }
  this.answer = vals.pop(); 
  return this.answer;
}

  }  


