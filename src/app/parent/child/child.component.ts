import { Component, OnInit } from "@angular/core";
import { TalkService } from "src/app/talk.service";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent implements OnInit {
  constructor(private _talkService: TalkService) {}

  ngOnInit() {
    console.log("child component created");
    this._talkService.talk.subscribe((data) => {
      console.log(data);
    });
  }
}
