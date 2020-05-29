import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TalkService {
  // talk = new EventEmitter();
  //talk = new Subject();
  talk = new BehaviorSubject(null);
  constructor() {}
}
