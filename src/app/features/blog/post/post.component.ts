import { Component, Input } from '@angular/core';
import { Post } from "../../../core/model/post.model";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => active', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  ]
})

export class PostComponent {

  @Input() post: Post = new Post();
  status = 'void';
  propIndex: number = 2;
  propCount = 0;
  displayItem: string = '';
  key: string| undefined = '';

  flip() {
    if (this.status == 'active') {
      this.status = 'void'
    } else {
      this.status = 'active';
    }
    this.propIndex++;
    if (this.propIndex == this.propCount) {
      this.propIndex = 0;
    }
    this.setItem();
  }

  ngOnInit() {
    this.propCount = Object.keys(this.post).length;
    this.setItem();
  }

  private setItem() {
    this.key = Object.keys(this.post)[this.propIndex];
    this.displayItem = (this.post as any)[this.key];
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
