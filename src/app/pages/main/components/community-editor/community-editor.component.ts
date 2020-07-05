import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CommunityService } from '@shared/services';
import { map } from 'rxjs/operators';
import { Communities } from '@shared/interfaces';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'ngcommunity-editor',
  templateUrl: './community-editor.component.html',
  styleUrls: ['./community-editor.component.scss'],
})
export class CommunityEditorComponent implements AfterViewInit {
  @Output()
  closeInfo = new EventEmitter<void>();

  @ViewChild('addresstext') addresstext: any;
  public autocompletedInput: string;
  public communityForm: FormGroup;

  private lastCommunityId: number;
  constructor(
    public formBuilder: FormBuilder,
    communityService: CommunityService,
    public clipboard: Clipboard,
  ) {
    communityService.communities
      .pipe(
        map((communities: Communities) => {
          const communityKeys = Object.keys(communities);
          return communities[communityKeys[communityKeys.length - 1]].id;
        }),
      )
      .subscribe((lastCommunityId: number) => {
        this.lastCommunityId = lastCommunityId;
      });
    this.communityForm = formBuilder.group({
      name: ['', [Validators.required]],
      addressName: ['', Validators.required],
      position: formBuilder.group({
        lat: ['', Validators.required],
        lng: ['', Validators.required],
      }),
      description: ['', Validators.required], // ADD LENGTH VALIDATOR WITH COUNTER AT THE BOTTOM
      city: ['', Validators.required],
      twitter: ['', Validators.required],
      web: [''],
      youtube: [''],
      organizers: formBuilder.array([this.createOrganizerFromGroup()]),
    });
  }

  ngAfterViewInit(): void {
    this.getPlaceAutocomplete();
  }

  private getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement, {
      types: ['address'], // 'establishment' / 'address' / 'geocode'
    });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      const positionControls = this.communityForm['controls'].position['controls'];
      positionControls.lat.setValue(place.geometry.location.lat());
      positionControls.lng.setValue(place.geometry.location.lng());
      this.autocompletedInput = place.name;
    });
  }

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
    let formResult = { ...this.communityForm.value };
    formResult['name'] = this.autocompletedInput;
    formResult['id'] = this.lastCommunityId + 1;

    // Remove empty optional inputs
    formResult.organizers.forEach(organizer => {
      if (organizer.github === '') delete organizer.github;
    });
    delete formResult.addressName;
    if (formResult.web === '') delete formResult.web;
    if (formResult.youtube === '') delete formResult.youtube;

    // TODO: Use EventEmitter with form value
    let copyOperation = this.clipboard.beginCopy(
      `"${formResult.name}": ` + JSON.stringify(formResult),
    );
    copyOperation.copy();
    copyOperation.destroy();
  }

  onCloseInfo() {
    this.closeInfo.emit();
  }
}
