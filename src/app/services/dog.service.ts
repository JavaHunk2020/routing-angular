import { Injectable } from '@angular/core';
import { Dog } from '../model/dog.model';

@Injectable({
  providedIn: 'root'
})
export class DogService {



  constructor() {

   }

   public findDogs() : Dog[] {
    //this can come dynamic
    let dogs:Dog[]=[];
    dogs.push(new Dog("Tommy","Black",'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRoTnd80s9q0wF7nb_dPH_XwK4DR9wAVPmjkMkIp3eEldR4Uz4cfiFD-FWiQGXjPPZ57lQ5KKWrtPTHsZw',"Bulldog"));
    dogs.push(new Dog("Bond","Brown",'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSgU4nPfMA2Ss-LB1u-cfjkd3JCEsyeyaLqufqktH0cl4DfeyvjoGMubCIvYW5OwwpB9iMBWMNAvl3qiwA',"German Shepherd"));
    dogs.push(new Dog("Jacky","Gray",'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQJlwSiVSYPSDq3WyLiDm8KUZyUwX8z8DskuvOC9u3ENsxbGPRa_Ah3odil3LKaZOU8Ev-ZYZ9fBcqqrfA',"Pug"));
    dogs.push(new Dog("Remie","Yellow",'',"Chihuahua"));  
    return dogs; 
   }
}
