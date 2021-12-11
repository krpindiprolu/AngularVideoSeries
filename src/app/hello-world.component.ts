import { Component } from '@angular/core';

@Component({
    selector: 'app-hello-world',
    template: "<h1>{{getMin(5,8)}}</h1>",
    styles: ['h1{color:blue}']
})

export class HelloWorldComponent {
    title= "Hello World!!"

    getMin(a: number,b: number) {
        if(a<b)
        {
            return a;
        }
        return b;
    }
}