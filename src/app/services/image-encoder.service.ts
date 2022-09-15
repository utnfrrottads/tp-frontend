import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageEncoderService {
  reader = new FileReader();
  imageObservable = {} as any;

  imageObservable$ = new Observable<any>((observer) => {
    this.reader.onload = () => {
      this.imageObservable.base64 = this.reader.result as string;
      observer.next(this.imageObservable);
    };
  });

  onImageChanges(e: any): void {
    if (e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      this.reader.readAsDataURL(file);
      this.imageObservable.fileName = file.name;
    }
  }
}
