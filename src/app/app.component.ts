import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	faceSnaps!: FaceSnap[];

	ngOnInit(): void {
		this.faceSnaps = [
			{
				title: 'Archibald', 
				descrip: 'Mon meilleur ami depuis tout petit !',
				dateCrea: new Date(),
				likes: 0, 
				img: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
				isLiked: false,
				location: 'Paris'
			},
			{
			  	title: 'Three Rock Mountain',
			  	descrip: 'Un endroit magnifique pour les randonnées.',
			  	dateCrea: new Date(),
			  	likes: 6,
				img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
				isLiked: false,
			  	location: 'la montagne'
			},
			{
			  	title: 'Un bon repas',
			  	descrip: 'Mmmh que c\'est bon !',
			  	dateCrea: new Date(),
				likes: 0,
			  	img: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
				isLiked: false
			}
	  

		]
	}
}
