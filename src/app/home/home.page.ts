import { Component } from '@angular/core';
import { environment } from '../../environments/environment'

import Amplify, { PubSub } from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub/lib/Providers';
import {UtilService} from '../services/util/util.service'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  bomb1:boolean=false;
  bomb2:boolean=false;
  bomb3:boolean=false;
  bomb4:boolean=false;

  constructor(
    private util:UtilService
  ) {
    Amplify.configure({
      Auth: {
        identityPoolId: environment.IDENTITY_POOL_ID,
        region: environment.REGION,
        userPoolId: environment.USER_POOL_ID,
        userPoolWebClientId: environment.USER_POOL_WEB_CLIENT_ID
      }
    });
    Amplify.addPluggable(new AWSIoTProvider({
      aws_pubsub_region: environment.REGION,
      aws_pubsub_endpoint: environment.MQTT_HOST,
    }));
  }

  action1(){
    if (this.bomb1){
      PubSub.publish('esp32/lamp1', { status: 0});
      this.bomb1 =false;
    }else{
      PubSub.publish('esp32/lamp1', { status: 1});
      this.bomb1 =true;
    }
  }
  action2(){
    if (this.bomb2){
      PubSub.publish('esp32/lamp2', { status: 0});
      this.bomb2 =false;
    }else{
      PubSub.publish('esp32/lamp2', { status: 1});
      this.bomb2 =true;
    }
  }
  action3(){
    if (this.bomb3){
      PubSub.publish('esp32/lamp3', { status: 0});
      this.bomb3 =false;
    }else{
      PubSub.publish('esp32/lamp3', { status: 1});
      this.bomb3 =true;
    }
    
  }
  action4(){
    if (this.bomb4){
      PubSub.publish('esp32/lamp4', { status: 0});
      this.bomb4 =false;
    }else{
      PubSub.publish('esp32/lamp4', { status: 1});
      this.bomb4 =true;
    }
  }
}
