class Stack{
    constructor(){
        this.stack_arr = [];
        this.size = 5;
    }
    add(element){
        if(this.stack_arr.length > this.size){
            console.log("Stack is overflow")
        }
        else{
            this.stack_arr.push(element);
        }
    }
    remove(stack_arr){
        if(this.stack_arr.length == 0){
            console.log("Stack is underflow")
        }
        else{
            this.stack_arr.pop();
        }
    }
}

let stack = new Stack();
stack.add(44);
stack.add(55);
stack.add(88);
stack.add(22);
stack.add(0);
stack.remove();
stack.remove();
console.log(stack.stack_arr);