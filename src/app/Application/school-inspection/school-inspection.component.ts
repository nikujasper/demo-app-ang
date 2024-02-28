import { Component } from '@angular/core';
import { SchoolInspectionService } from '../../Services/school-inspection.service';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-school-inspection',
  templateUrl: './school-inspection.component.html',
  styleUrl: './school-inspection.component.css',
})
export class SchoolInspectionComponent {
  district: any = '';
  block: any = '';
  cluster: any = '';
  school: any;
  check: any;
  districtArr: any;
  blockArr: any;
  clusterArr: any;
  schoolArr: any;

  constructor(private SchoolInspectionComponent: SchoolInspectionService) {}

  ngOnInit() {
    this.getDistrict();
  }

  getDistrict() {
    this.SchoolInspectionComponent.getDistrict().subscribe((res: any) => {
      // console.log(res);
      this.districtArr = res;
      // console.log(this.districtArr);
    });
  }
  getBlock(event: any) {
    this.block = '';
    // console.log(event.target.value);
    let districtId = event.target.value;
    this.SchoolInspectionComponent.getBlock(districtId).subscribe(
      (res: any) => {
        // console.log(res);
        this.blockArr = res;
      }
    );
  }
  getCluster(event: any) {
    this.cluster = '';
    // console.log(event.target.value);
    let blockId = event.target.value;
    this.SchoolInspectionComponent.getCluster(blockId).subscribe((res: any) => {
      // console.log(res);
      this.clusterArr = res;
    });
  }
  searchSchool(event: any) {
    let clusterId = event.target.value;
    // console.log(clusterId);
    this.SchoolInspectionComponent.getSchool(clusterId).subscribe(
      (res: any) => {
        // console.log(res);
        this.schoolArr = res;
      }
    );
  }
  inspectionDetail(event: any) {
    // console.log('input' + event);
    let inputBox = document.getElementById('input' + event);
    if (inputBox?.hasAttribute('disabled')) {
      inputBox.removeAttribute('disabled');
    } else {
      inputBox?.setAttribute('disabled', 'disabled');
    }
  }
  storeInspection() {
    console.log(this.schoolArr);

    let checkedSchoolIds: any[] = []; // Array to store data of checked schools
    let emptyForm = false; // Flag to track if any form is empty

    // Loop through each school in the schoolArr array
    this.schoolArr.forEach((item: any, index: any) => {
      const checkbox = document.getElementById(
        'check' + index
      ) as HTMLInputElement;
      const inputbox = document.getElementById(
        'input' + item.schoolId
      ) as HTMLInputElement;

      // Check if the checkbox for this school is checked
      if (checkbox.checked) {
        const inspectionValue = inputbox.value.trim(); // Get the value of the input field and trim whitespace

        // Check if the inspectionValue is empty
        if (inspectionValue === '') {
          emptyForm = true; // Set the emptyForm flag to true
          return; // Exit the loop
        }

        // If inspectionValue is not empty, create an object with relevant data
        else {
          const rowData = {
            district: this.district,
            block: this.block,
            cluster: this.cluster,
            schoolId: item.schoolId,
            inspection: inspectionValue,
          };
          checkedSchoolIds.push(rowData); // Push the object to the checkedSchoolIds array
        }
      }
    });

    // Check if any form was found empty
    if (emptyForm) {
      alert('Fill Inspection..!!'); // Show alert if any form is empty
    } else {
      console.log(checkedSchoolIds); // Log the form data in array if no empty form is found
    }
  }
}
