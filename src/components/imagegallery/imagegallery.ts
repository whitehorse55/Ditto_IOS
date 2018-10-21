import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController } from 'ionic-angular';
import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the ImagegalleryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'imagegallery',
  templateUrl: 'imagegallery.html'
})
export class ImagegalleryComponent {


  public base64Image: any

  @Output() sendImageData: EventEmitter<any> = new EventEmitter()

  constructor(private actionSheetCtrl: ActionSheetController, private camera: Camera) {

    this.base64Image = ""
    console.log('Hello ImagegalleryComponent Component');
  }

  ////////////////////function : when click add photo button////////////////////
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePhoto(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePhoto(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  //////////////////////////function : get image data from gallery and camera////////////
  private takePhoto(sourceType) {

    const options: CameraOptions = {
      quality: 100, // picture quality
      targetHeight: 200,
      targetWidth: 200,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: sourceType,
      saveToPhotoAlbum: true
    }

    this.camera.getPicture(options).then(imageData => {
      this.base64Image = imageData
      let firebaseImage = 'data:image/jpeg;base64,' + imageData
      this.getImageDataFromGallery(firebaseImage)
    }, (err) => {
      console.log(err);
    });
  }

  getImageDataFromGallery(myimage) {
    this.sendImageData.emit(myimage)
  }

}
