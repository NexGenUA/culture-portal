import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { IVideo } from 'src/app/shared/models/writer.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  video: IVideo;

  newLink: string;

  constructor(private dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) data: IVideo,
              private sanitizer: DomSanitizer) {
                this.video = data;
              }

  ngOnInit(): void {
  }

  public generateSafeUrl(): SafeResourceUrl {
    const iframeLink = this.video.link.replace('youtu.be', 'www.youtube.com/embed');
    return this.sanitizer.bypassSecurityTrustResourceUrl(iframeLink);
  }

  public closeModal(): void {
    this.dialogRef.close();
  }

}
