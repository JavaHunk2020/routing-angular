import { Component, OnInit } from '@angular/core';
import { Dog } from '../model/dog.model';
import { DogService } from '../services/dog.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

   //Creating array of Dog type
   dogs : Dog[] =  [new Dog("James","White",'https://a-z-animals.com/media/2023/06/shutterstock-1929372332-huge-licensed-scaled-1024x683.jpg',"Labrador Retriever")];
   
   hidebreed:boolean = true;
   //private dogService:DogService;
   constructor(private dogService:DogService) {
   //        this.dogService  = dogService;
   }

   sortAsc() {
      this.dogs.sort((d1 : Dog,d2 :Dog)=> {
           return d1.breed.localeCompare(d2.breed);
      });
      this.hidebreed =false;
   }

   sortDesc() {
    this.dogs.sort((d1 : Dog,d2 :Dog)=> {
         return d2.breed.localeCompare(d1.breed);
    });
    this.hidebreed =true;
 }

  ngOnInit(): void {
    let dogs:Dog[]=this.dogService .findDogs();
    //This is 
    dogs.forEach(dog=>this.dogs.push(dog));
  }

  editDog(dog: any) {
  
  }
  
  deleteDog(dog: Dog) {
    //What this logic
    this.dogs=this.dogs.filter(t=>t.name!==dog.name);
  }

  

}
