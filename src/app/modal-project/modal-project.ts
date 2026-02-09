import { Component, Input, Output, EventEmitter, Inject, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-project',
  imports: [CommonModule],
  templateUrl: './modal-project.html',
  styleUrl: './modal-project.scss',
})
export class ModalProject {

  constructor(
    public dialogRef: MatDialogRef<ModalProject>,
    @Inject(MAT_DIALOG_DATA) public project: Project
  ) {}

  close() {
    this.dialogRef.close();
  }
}

