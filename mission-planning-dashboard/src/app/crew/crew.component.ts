import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  memberBeingEdited: object = null;

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  edit(member)
  {
    this.memberBeingEdited = member;
  }

  save(){

  }



  remove(member)
  {
    let index= this.crew.indexOf(member);
    this.crew.splice(index,1);

  }

  constructor() { }

  ngOnInit() {
  }

}
