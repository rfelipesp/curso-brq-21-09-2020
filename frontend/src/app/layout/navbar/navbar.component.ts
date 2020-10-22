import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/auth/auth.service';
import { ProdutosPagination } from 'src/app/shared/models/produtos-pagination';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isAuthenticated : boolean = false;
  public loggedInUser : string;
  public roleUser : string;

  public produtos      : ProdutosPagination;

  public pagina         : number = 0;
  public linhas         : number = 20;
  public categoria      : string;

  public totalElements  : number = 0;
  public totalPages     : number = 0;
  public busca          : string = "";

  public faShoppingCart = faShoppingCart;

  constructor(
    private storageService : StorageService,
    private router : Router,
    private authService : AuthService,
    private produtoService : ProdutoService

  ) { }

  ngOnInit(): void {

    this.isAuthenticated = this.storageService.getLocalUser() ? true : false;

    this.authService.authSubject.subscribe(
      (message) => { this.isAuthenticated = message; }
    );

    if (!this.isAuthenticated){
      this.storageService.setLocalUser (null);
      this.router.navigate(['auth/login']);
    }


    if(this.isAuthenticated){
      this.loggedInUser = this.storageService.getLocalUser().email;
    }

    if(this.storageService.getLocalUser() && this.storageService.getLocalUser().scopes.includes('ROLE_ADMIN')){
      this.roleUser = this.storageService.getLocalUser().scopes;
    }


  }

  doLogout(): void {
    this.storageService.setLocalUser(null);
    this.router.navigate(['home']);
  }

  doSearch(){
    this.produtoService.getProdutos(this.pagina, this.linhas, this.busca)
    .subscribe(
      (response : any)=>{
        this.produtos = response;
        this.totalElements = response.totalElements;
        this.totalPages = response.totalPages;
      }
    );
  }

}
