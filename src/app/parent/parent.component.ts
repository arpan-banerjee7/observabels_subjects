import { Component, OnInit } from "@angular/core";
import { TalkService } from "../talk.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"],
})
export class ParentComponent implements OnInit {
  photoList = [
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
      albumId: 1,
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
    {
      albumId: 1,
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://via.placeholder.com/150/24f355",
    },
  ];
  constructor(private _talkService: TalkService, private router: Router) {}

  ngOnInit() {}

  displayName(id, url, thumbnailUrl) {
    console.log({ id, url, thumbnailUrl });

    //this._talkService.talk.emit({ id, url, thumbnailUrl });
    this._talkService.talk.next({ id, url, thumbnailUrl });
    this.router.navigate(["/photo"]);
  }
}
