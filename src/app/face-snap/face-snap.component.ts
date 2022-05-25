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
		this.likes = 6;
		this.img = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
	}
}
