import { MeetingService } from './../../../services/meeting.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'df-meeting-page',
  templateUrl: './meeting-page.component.html',
  styles: [
  ]
})
export class MeetingPageComponent implements OnInit {

  constructor(public http: MeetingService) { }

  ngOnInit(): void {
    this.loadMeetings()
  }
  public meetings;

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
