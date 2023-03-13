import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
 items=[
    {
      title: "The future of programming with ChatGPT",
      author: "ChatGPT",
      description: "Revolutionizing the way we code, ChatGPT is leamming is accessible to all. From novice to expert, ChatGPT empowers individuals to bring their ideas to life through the power of language.",
  },
  {
      title: "How to create services in Angular",
      author: "Angular Docs",
      description: "Unlock the power of Angular's dependency injel. Learn how to effortlessly manage and instantiate services, values, and functions with the help of our comprehensive tutorial.",
  },
  {
      title: "VSC - The ultimate coding companion",
      author: "Microsoft",
      description: "Discover the ultimate coding companion - explore  of Visual Studio Code with our in-depth review. Elevate your coding experience and streamline your workflow with the power of this versatile editor.",
  },
  {
      title: "A programmer's guide on mastering TypeScript (2022)",
      author: "John Doe",
      description: "Master the language that brings clarity and.",
  },
   {
      title: "VSC - The ultimate coding companion",
      author: "Microsoft",
      description: "Discover the ultimate coding companion - explore  of Visual Studio Code with our in-depth review. Elevate your coding experience and streamline your workflow with the power of this versatile editor.",
  },
  {
    title: "VSC - The ultimate coding companion",
    author: "Microsoft",
    description: "Discover the ultimate coding companion - explore  of Visual Studio Code with our in-depth review. Elevate your coding experience and streamline your workflow with the power of this versatile editor.",
},
  ]
}
