import { Component } from '@angular/core';
import { LocalNService } from '../service/local-n.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  id: number = 0;
  constructor(private localNS: LocalNService) {
    setInterval(() =>{
      
      this.id = this.id + 1 
      console.log(this.id, " TEST NOTIFICATION "+ this.id , "Hola");
      
      this.localNS.showLocalNotification ( this.id, " TEST NOTIFICATION "+ this.id , "Hola");
  
  }
    , 5000);

    
  }
  
  send(){
    this.localNS.showLocalNotification ( 1, " TEST NOTIFICATION " , "Hola");
  }

}
