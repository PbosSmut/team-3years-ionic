import {Component, OnInit, Input} from "@angular/core";
import {FacebookData} from "../../model/facebook/facebookData";
import {FacebookPost} from "../../model/facebook/facebookPost";


@Component({
  selector: 'facebookPostTable',
  templateUrl: 'facebookPostTable.component.html'
})
export class FacebookPostTable implements OnInit {
  @Input()
  allFaceBookPostData: FacebookData[];
  allfacebookPosts: FacebookPost[];
  visibleFacebookPostData: FacebookPost[];

  constructor() {
  }


  ngOnInit(): void {
    console.log("this are all the facebook posts");
    this.allfacebookPosts = this.allFaceBookPostData[this.allFaceBookPostData.length - 1].posts;
    console.log(this.allfacebookPosts);
    console.log("This are the visible ones");
    this.visibleFacebookPostData = [this.allfacebookPosts[0], this.allfacebookPosts[1], this.allfacebookPosts[2]];
    console.log(this.visibleFacebookPostData);

  }

  showAllData(): void {
    let firstThree = [this.allfacebookPosts[0], this.allfacebookPosts[1], this.allfacebookPosts[2]];
    if (this.visibleFacebookPostData.length > 3) {
      this.visibleFacebookPostData = firstThree;
    } else {
      this.visibleFacebookPostData = this.allfacebookPosts;
    }
  }
}
