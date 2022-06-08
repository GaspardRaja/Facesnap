import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
	@Input() faceSnap!: FaceSnap
	btnText!: string;

	constructor(private faceSnapsService: FaceSnapsService,
				private route: ActivatedRoute) {}

	ngOnInit() {
		this.btnText = 'Like';
		const faceSnapId = +this.route.snapshot.params['id'];
		this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
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
