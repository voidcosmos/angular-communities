import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'ngcommunity-editor',
  templateUrl: './community-editor.component.html',
  styleUrls: ['./community-editor.component.scss'],
})
export class CommunityEditorComponent implements OnInit {
  @Output()
  closeInfo = new EventEmitter<void>();

  public communityForm: FormGroup;
  constructor(public formBuilder: FormBuilder) {
    this.communityForm = formBuilder.group({
      communityName: ['', [Validators.required]],
      location: ['', Validators.required],
      description: ['', Validators.required], // ADD LENGTH VALIDATOR WITH COUNTER AT THE BOTTOM
      city: ['', Validators.required],
      twitter: ['', Validators.required],
      web: ['', Validators.required],
      youtube: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      organizers: formBuilder.array([this.createOrganizerFromGroup()]),
    });
    console.log(this.communityForm);
  }

  ngOnInit(): void {}

  createOrganizerFromGroup() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      twitter: ['', Validators.required],
      github: [''],
    });
  }
  addOrganizer() {
    (this.communityForm.get('organizers') as FormArray).push(this.createOrganizerFromGroup());
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.communityForm.value);
  }

  onCloseInfo() {
    this.closeInfo.emit();
  }
}
