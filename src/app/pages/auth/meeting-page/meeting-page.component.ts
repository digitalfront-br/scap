import { Router } from '@angular/router';
import { MeetingService } from './../../../services/meeting.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'df-meeting-page',
  templateUrl: './meeting-page.component.html',
  styles: [
  ]
})
export class MeetingPageComponent implements OnInit {

  constructor(public http: MeetingService, public router: Router) { }

  ngOnInit(): void {
    this.loadMeetings()
  }
  public meetings;
  public creating;

  editableMode() {
    let status = JSON.parse(window.localStorage.getItem('editMode'));
    if(status == true) {
      this.creating = false;
      return this.router.navigate(['/questions'])
    } else {
      window.localStorage.setItem('editMode', JSON.stringify(true));
      this.creating = true;
      return this.router.navigate(['/meetings'])
    }
  }

  endMode() {
      window.localStorage.removeItem('editMode');
      this.creating = true;
      return this.router.navigate(['/meetings'])
  }

  loadMeetings() {
    return this.http.getMeeting().subscribe(
      success => {
        this.meetings = success
      },
      error => {
        console.log(error)
      }
    )
  }

}
