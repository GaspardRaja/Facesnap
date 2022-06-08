import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
	
	@Input() faceSnap!: FaceSnap
	btnText!: string;

	constructor(private router: Router) {}

	ngOnInit(): void {
		this.btnText = 'Like'
	}

	onViewFaceSnap(): void {
		this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
	}

}
