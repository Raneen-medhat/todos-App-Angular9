import { Component, Input, ElementRef, ViewChild, AfterViewInit, Output, EventEmitter  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements AfterViewInit {
  closeResult: string;
  @Input() todo;
  @ViewChild("content") content: ElementRef;
  @Output() save = new EventEmitter();
  constructor(private modalService: NgbModal) {}

  openVerticallyCentered() {
    this.modalService.open(this.content, { centered: true });
  }

  saveEdit = (value, id) => {
    this.save.emit({value, id});
  }

  ngAfterViewInit(): void {
    this.openVerticallyCentered()
  }

}
