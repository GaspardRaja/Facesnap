import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
	
	@Input() faceSnap!: FaceSnap
	btnText!: string;

	constructor(private faceSnapsService: FaceSnapsService) {}

	ngOnInit() {
		this.btnText = 'Like'
	}

	onLike() {
		if (!this.faceSnap.isLiked) {
			this.faceSnapsService.likeFaceSnapById(this.faceSnap.id, 'like');
			this.btnText = 'Unlike';
		} else {
			this.faceSnapsService.likeFaceSnapById(this.faceSnap.id, 'unlike');
			this.btnText = 'Like';
		}
	}
}
