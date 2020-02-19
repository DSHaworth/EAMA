import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

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
    this.snackbar.open(message, " ",{
      duration: this.defaultDisplayTime * 1000,
      announcementMessage: message,      
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: ["customize-snackbar", "snackbar-error"],
    });    
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