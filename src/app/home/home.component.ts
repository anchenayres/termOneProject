import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // items=[
  //   {
  //     title: "The future of programming with ChatGPT",
  //     author: "ChatGPT",
  //     description: "Revolutionizing the way we code, ChatGPT is leamming is accessible to all. From novice to expert, ChatGPT empowers individuals to bring their ideas to life through the power of language.",
  // },
  // {
  //     title: "How to create services in Angular",
  //     author: "Angular Docs",
  //     description: "Unlock the power of Angular's dependency injel. Learn how to effortlessly manage and instantiate services, values, and functions with the help of our comprehensive tutorial.",
  // },
  // {
  //     title: "VSC - The ultimate coding companion",
  //     author: "Microsoft",
  //     description: "Discover the ultimate coding companion - explore  of Visual Studio Code with our in-depth review. Elevate your coding experience and streamline your workflow with the power of this versatile editor.",
  // },
  // {
  //     title: "A programmer's guide on mastering TypeScript (2022)",
  //     author: "John Doe",
  //     description: "Master the language that brings clarity and.",
  // }
  // ]
  
  imgCollection =[
    {
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-dog&psig=AOvVaw1PR4CL9unsom3-S9vPZwWH&ust=1678808137439000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCICDqOed2f0CFQAAAAAdAAAAABAI',
      title: 'image 1',
      alt: 'image 1'
    },
    {
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-dog&psig=AOvVaw1PR4CL9unsom3-S9vPZwWH&ust=1678808137439000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCICDqOed2f0CFQAAAAAdAAAAABAI',
      title: 'image 2',
      alt: 'image 2'
    },{
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-dog&psig=AOvVaw1PR4CL9unsom3-S9vPZwWH&ust=1678808137439000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCICDqOed2f0CFQAAAAAdAAAAABAI',
      title: 'image 3',
      alt: 'image 3'
    },{
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-dog&psig=AOvVaw1PR4CL9unsom3-S9vPZwWH&ust=1678808137439000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCICDqOed2f0CFQAAAAAdAAAAABAI',
      title: 'image 4',
      alt: 'image 4'
    }
  ]
}
