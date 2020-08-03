import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CommunityService } from '@shared/services';
import { map } from 'rxjs/operators';
import { Communities } from '@shared/interfaces';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'ngcommunity-editor',
  templateUrl: './community-editor.component.html',
  styleUrls: ['./community-editor.component.scss'],
})
export class CommunityEditorComponent implements AfterViewInit {
  @Output()
  closeInfo = new EventEmitter<void>();

  @ViewChild('addressInput') addressInput: ElementRef<HTMLInputElement>;
  private autocompletedInput: string;
  public communityForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clipboard: Clipboard,
    private snackBar: MatSnackBar,
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
    const autocomplete = new google.maps.places.Autocomplete(this.addressInput.nativeElement, {
      types: ['address'], // 'establishment' / 'address' / 'geocode'
    });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      const { location } = place.geometry;
      this.position.setValue({ lat: location.lat(), lng: location.lng() });
      this.autocompletedInput = place.name;
    });
  }

  createOrganizerFromGroup() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      twitter: ['', Validators.required],
      github: [''],
      webs: this.formBuilder.array([this.formBuilder.control('')]),
    });
  }
  addOrganizer() {
    this.organizers.push(this.createOrganizerFromGroup());
  }
  addWebTo(organizer: FormGroup) {
    const webs = organizer.get('webs') as FormArray;
    webs.push(this.formBuilder.control(''));
  }
  onSubmit() {
    const newCommunity = this.getCleanValue();
    const copyOperation = this.clipboard.beginCopy(
      `"${newCommunity.name}": ${JSON.stringify(newCommunity)}`,
    );
    copyOperation.copy();
    copyOperation.destroy();

    this.snackBar.open('Community JSON copied into clipboard', 'OK', {
      duration: 2000,
      panelClass: 'custom-mat-snackbar-style',
    });
  }

  getCleanValue(): any {
    // This functions should be tested
    let cleanedResult = { ...formResult };
    cleanedResult['name'] = this.autocompletedInput;
    cleanedResult['id'] = this.lastCommunityId + 1;

    // Remove empty optional inputs
    cleanedResult.organizers.forEach(organizer => {
      if (organizer.github === '') delete organizer.github;
      if (organizer.webs && organizer.webs.length === 0) delete organizer.webs;
      else if (!organizer.webs) {
        delete organizer.webs;
      } else {
        organizer.webs = organizer.webs.filter(web => web != '');
        if (organizer.webs.length === 0) delete organizer.webs;
      }
    });
    delete cleanedResult.addressName;
    if (cleanedResult.web === '') delete cleanedResult.web;
    if (cleanedResult.youtube === '') delete cleanedResult.youtube;

    return cleanedResult;
  }

  onCloseInfo() {
    this.closeInfo.emit();
  }
}