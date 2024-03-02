import { Component } from '@angular/core';
import { SchoolInspectionService } from '../../Services/school-inspection.service';
import { isEmpty } from 'rxjs';
import Swal from 'sweetalert2';

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
  emptyForm: boolean = false;
  isLoading: boolean = false;

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
    this.cluster = '';
    // console.log(event.target.value);
    let districtId = event.target.value;
    let inputData = {
      id: districtId,
    };
    this.SchoolInspectionComponent.getBlock(inputData).subscribe((res: any) => {
      // console.log(res);
      this.blockArr = res;
    });
  }
  getCluster(event: any) {
    this.cluster = '';
    let blockId = event.target.value;

    var inputdata = {
      id: blockId,
    };
    // console.log(event.target.value);
    this.SchoolInspectionComponent.getCluster(inputdata).subscribe(
      (res: any) => {
        // console.log(res);
        this.clusterArr = res;
      }
    );
  }
  searchSchool(event: any) {
    let clusterId = event.target.value;
    var inputData = {
      id: clusterId,
    };
    this.isLoading = true;
    this.SchoolInspectionComponent.getSchool(inputData).subscribe(
      (res: any) => {
        // console.log(res);
        this.schoolArr = res;
        this.isLoading = false;
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
    let checkedSchoolIds: any[] = []; // Array to store data of checked schools
    // const emptyForm = false; // Flag to track if any form is empty
    // Loop through each school in the schoolArr array
    let count = 0;
    this.schoolArr.forEach((item: any, index: any) => {
      const checkbox = document.getElementById(
        'check' + index
      ) as HTMLInputElement;
      const inputbox = document.getElementById(
        'input' + item.schoolId
      ) as HTMLInputElement;

      // Check if the checkbox for this school is checked
      if (checkbox.checked) {
        count = count + 1;
        const inspectionValue = inputbox.value.trim();
        if (inspectionValue === '') {
          this.emptyForm = true;
          return;
        } else {
          this.emptyForm = false;
          // If inspectionValue is not empty, create an object with relevant data
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
      if (count < 1) {
        this.emptyForm = true;
      }
      // else {
      //   this.emptyForm = true;
      // }
    });

    // Check if any form was found empty
    if (this.emptyForm) {
      // alert('Fill Inspection..!!');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fill Inspection..!!',
      });
    } else {
      this.SchoolInspectionComponent.submitInspection(
        checkedSchoolIds
      ).subscribe((res: any) => {
        if (res) {
          // alert('Data Saved..!!');
          Swal.fire({
            title: 'Success!',
            text: 'Data Saved..!!',
            icon: 'success',
          });
          // console.log(res);

          window.location.reload();
        }
      });
    }
  }
}
