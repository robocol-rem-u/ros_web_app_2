import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
// import { timer, of } from 'rxjs';
// import { Socket } from 'ngx-socket-io';
// import { switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FPGAService
{
  //Define the variables that will be listening to the messages comming from the Socket Server
  // measurements_value = this.socket.fromEvent<number>('measurements');
  private socket;
  constructor(private router: Router )
  {
    console.log("FPGAService: constructor");
    this.socket = new WebSocket("ws://" + window.location.host + "/ws" + this.router.url + "/");
  }
  sendMessage(message: string)
  {
    console.log("FPGAService: sendMessage");
    this.socket.send(JSON.stringify({ message: message }));
  }
  onMessage(): Observable<Object>
  {
    console.log("FPGAService: onMessage");
    return Observable.create(observer => {this.socket.onmessage = event => {observer.next(JSON.parse(event.data));};});
  }
  change_value(object: String, action:String, value:String)
  {
    console.log("FPGAService: change_value");
    this.socket.send(JSON.stringify({ id:"change_value", object: object, action: action, value: value}));
  }
  get_values()
  {
    console.log("FPGAService: get_values");
    this.socket.send(JSON.stringify({ id:"get_values"}));
  }
  close()
  {
    console.log("FPGAService: close");
    // this.socket.close();
    // this.socket.terminate();
  };
}



  // constructor()//private socket: Socket)
  // {
    
  // }
  //Create the function that will emit a message to the Socket Server, asking for a joint's value or the gripper's value
  // get_value(object: string)
  // {
  //   this.socket.emit('get_value_sensors', {object: object});
  // }
  //Create the function that will tell the Socket Server to start increasing or decreasing a joint's value or the gripper's value, it means a button is pressed
  // change_value(object: string, action: string)
  // {
  //   // console.log('Data change.');
  //   // console.log(' Object: '+object);
  //   // console.log(' Action: '+action);
  //   this.socket.emit('sensors_change_value', {object: object, action: action});
  //   // this.socket.on('measurements', (data: string) => {
  //     // this.temperature_value.value = data['temp'];
  //     // console.log(this.temperature_value);
  //     // console.log("TEMP");
  //     // console.log(data['temp']);
  //     // console.log("TEMP VALUE");
  //     // console.log(this.temperature_value);
  //   // });
  // }
  //Create the function that will tell the Socket Server to stop changing the value of the object that was changing, it means all of the buttons are unpressed
  // stop_changing_value()
  // {
  //   this.socket.emit('stop_changing_value');
  // }
