import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { DataDataToServerService } from './data-data-to-server.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  courses =['Angular', 'React', 'Vue'];
  courseHasError:boolean = true;
  submitted = false;
  /*msg erreur venat du server */
  errorMsg = '';

  userModel = new User('', 'hamed@gmail.com', '57645875','default', 'morning', true );

  constructor(private sendDataService: DataDataToServerService){}
  onSubmit(){
    this.submitted = true;
    this.sendDataService.sendData(this.userModel)
    .subscribe(
      data => console.log('succes!', data),
      error => this.errorMsg = error.statusText
    )
    this.userModel = new User('', '', '','default', 'evening', true);
  }
  validateCourse(value:string){
    if (value === 'default') {
        this.courseHasError = true;
    }
    else{
      this.courseHasError = false;
    }
  }
  
}
