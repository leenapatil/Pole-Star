import { Component, OnInit } from '@angular/core';
import { Profile } from '../../models/profile';
import { ActivatedRoute } from '@angular/router';
import { SearchStringPipe } from '../../pipe/search-string.pipe';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileData: Profile[] = [];
  searchString: string;
  criticalStatus = false;
  warningStatus = false;
  okStatus = false;
  nameAscSort = true;
  createdAscSort = true;
  modifiedAscSort = true;

  constructor(private activatedRoute: ActivatedRoute, private searchStringPipe: SearchStringPipe) { }

  ngOnInit(): void {
    const response = this.activatedRoute.snapshot.data.profileData.results;
    this.profileData = response.map((profile: Profile) => {
      let data = {};
      data['id'] = profile['id'];
      data['name'] = profile['name'];
      data['created'] = profile['created'];
      data['modified'] = profile['modified'];
      data['country_check_severity'] = profile?.country_check_severity.substring(3);
      return data;
    });
  }

  sort(colName, sortType) {
    sortType = !sortType;
    if (colName === 'name') {
      this.nameAscSort = !this.nameAscSort;
    } else if (colName === 'created') {
      this.createdAscSort = !this.createdAscSort;
    } else if (colName === 'modified') {
      this.modifiedAscSort = !this.modifiedAscSort;
    }
    if (!sortType) {
      this.profileData.sort((a, b) => a[colName] < b[colName] ? 1 : a[colName] > b[colName] ? -1 : 0);
    } else {
      this.profileData.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0);
    }
  }

}
