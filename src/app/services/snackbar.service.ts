import { Component, Injectable, Inject } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) { }

  defaultDisplayTime:number = 5;

  openSnackBar() {
    this.snackbar.open('test', 'Close');
  }  

  showError(message: string){

    this.snackbar.openFromComponent(SnackbarComponent, {
      data: message,
      //duration: this.defaultDisplayTime * 1000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: ["customize-snackbar", "snackbar-error"]
    });

    // this.snackbar.open(message, " ",{
    //   duration: this.defaultDisplayTime * 1000,
    //   announcementMessage: message,      
    //   horizontalPosition: "center",
    //   verticalPosition: "top",
    //   panelClass: ["customize-snackbar", "snackbar-error"],
    // });    
  }

  showInfo(message: string){
    this.snackbar.open(message, " ",{
      duration: this.defaultDisplayTime * 1000,
      announcementMessage: message,      
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: ["customize-snackbar", "snackbar-info"],
    });    
  }  

  showSuccess(message: string){
    this.snackbar.open(message, " ",{
      duration: this.defaultDisplayTime * 1000,
      announcementMessage: message,      
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: ["customize-snackbar", "snackbar-success"],
    });        
  }
}

import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
@Component({
  selector: 'snack-bar-component-example-snack',
  template: `
<div class="flex" style="height: 100%;">
  <div class="aligner" style="height: 100%;"><mat-icon>error_outline</mat-icon></div>
  <div class="data">{{data}}</div>
  <div class="dismiss">
    <button mat-icon-button (click)="snackBarRef.dismiss()">
        <mat-icon>close</mat-icon>
      </button>
  </div>
</div>`
})
export class SnackbarComponent {
  constructor(
    public snackBarRef: MatSnackBarRef<SnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) { }

}