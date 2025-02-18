import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss'
})
export class ConfirmDialogComponent {
    action: string = '';
    message: string = '';
  
    constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {}
  
    onConfirm(): void {
      this.dialogRef.close('confirmed');
    }
  
    onCancel(): void {
      this.dialogRef.close('cancelled');
    }


}
