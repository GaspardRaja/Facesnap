import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
	title!: string;
	descrip!: string;
	dateCrea!: Date;
	likes!: number; 
	img!: string;

	ngOnInit() {
		this.title = 'Archibald';
		this.descrip = 'Mon meilleur ami depuis tout petit !';
		this.dateCrea = new Date();
		this.likes = 0;
		this.img = 
	}

	onAddLike() {
		this.likes++;
	}
}
