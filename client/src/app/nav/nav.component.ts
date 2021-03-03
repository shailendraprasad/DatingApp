import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userModel: any = {}

  constructor(public accountService: AccountService, private toastr: ToastrService){
  }

  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.userModel).subscribe(result => {
      console.log(result)
    }, error => {
      this.toastr.error(error.error)
    })
  }

  logout() {
    this.accountService.logout();
  }

}
