import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../services/login.service";
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})


export class ViewUserComponent implements OnInit {
  displayedColumns: string[] = [ '_username', '_password', '_role'];
  dataSource : any;
  abc:any;
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.dataSource=new MatTableDataSource(this.loginService.getAllUsers());
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
