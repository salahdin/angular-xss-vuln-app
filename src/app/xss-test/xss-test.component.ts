import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-xss-test',
  templateUrl: './xss-test.component.html',
  styleUrls: ['./xss-test.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class XssTestComponent implements OnInit {
  userInput: string = '';
  unsafeContent: SafeHtml = '';

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userInput = params['input'] || '';
      this.updateUnsafeContent();
    });
  }

  updateUnsafeContent() {
    this.unsafeContent = this.sanitizer.bypassSecurityTrustHtml(this.userInput);
  }
}
