import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { convertToSpacesPipe } from './convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'products',component:ProductListComponent},
      {path: 'products/:id', canActivate:[ProductGuardService],
      component:ProductDetailComponent},
    ])
  ],
  declarations: [
    ProductListComponent,
    convertToSpacesPipe,
    StarComponent,
    ProductDetailComponent
  ],
  providers: [ProductGuardService]
})
export class ProductModule { }
