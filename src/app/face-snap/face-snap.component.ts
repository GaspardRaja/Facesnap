import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
	@Input() faceSnap!: FaceSnap

	btnText!: string;

	ngOnInit() {
		this.btnText = 'Like'
	}

	onLike() {
		if (this.faceSnap.isLiked) {
			this.faceSnap.likes--;
			this.faceSnap.isLiked = false;
			this.btnText = 'Like';
		} else {
			this.faceSnap.likes++;
			this.faceSnap.isLiked = true;
			this.btnText = 'Unlike';
		}
	}
}
