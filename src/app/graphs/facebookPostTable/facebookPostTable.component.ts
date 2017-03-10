import {Component, OnInit, Input} from "@angular/core";
import {FacebookData} from "../../model/facebook/facebookData";
import {FacebookPost} from "../../model/facebook/facebookPost";
/**
 * Created by De Bièvre on 10-3-2017.
 */

@Component({
  selector: 'facebookPostTable',
  templateUrl: 'facebookPostTable.component.html'
})
export class FacebookPostTable implements OnInit {
  @Input()
   allFaceBookPostData: FacebookData[];
   public facebookPostData: FacebookPost[];

  constructor() {
  }


  ngOnInit(): void {
    this.facebookPostData = this.allFaceBookPostData[this.allFaceBookPostData.length-1].posts;

  }

  showAllData(): void {
    let firstThree = [this.facebookPostData[0],this.facebookPostData[1],this.facebookPostData[2]];
    if (this.facebookPostData.length > 3) {
      this.facebookPostData = firstThree;
    } else {
      this.facebookPostData = this.allFaceBookPostData[this.allFaceBookPostData.length-1].posts;
    }

    console.log(this.facebookPostData);
  }
}
