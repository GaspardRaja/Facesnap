import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
	providedIn: 'root'
})
export class FaceSnapsService {
	faceSnaps: FaceSnap[] = [
		{
			id: 1,
			title: 'Archibald', 
			descrip: 'Mon meilleur ami depuis tout petit !',
			dateCrea: new Date(),
			likes: 0, 
			img: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
			isLiked: false,
			location: 'Paris'
		},
		{
			id: 2,
			title: 'Three Rock Mountain',
			descrip: 'Un endroit magnifique pour les randonnées.',
			dateCrea: new Date(),
			likes: 0,
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
			isLiked: false,
			location: 'la montagne'
		},
		{
			id: 3,
			title: 'Un bon repas',
			descrip: 'Mmmh que c\'est bon !',
			dateCrea: new Date(),
			likes: 0,
			img: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
			isLiked: false
		}
	];

	getAllFaceSnaps(): FaceSnap[] {
		return this.faceSnaps;
	};

	getFaceSnapById(faceSnapId: number): FaceSnap {
		const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);

		if (!faceSnap) {
			throw new Error("FaceSnap not found!");
		} else {
			return faceSnap;
		}
	}

	likeFaceSnapById(faceSnapId: number, snapType: 'like' | 'unlike'): void {
		const faceSnap = this.getFaceSnapById(faceSnapId);
		if (snapType === 'like') {
			faceSnap.likes++;
			faceSnap.isLiked = true;
		} else {
			faceSnap.likes--;
			faceSnap.isLiked = false;
		}
	}
}