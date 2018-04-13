import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, 
         MatToolbarModule, 
         MatInputModule, 
         MatProgressSpinnerModule, 
         MatCardModule, 
         MatIconModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatListModule } from '@angular/material/list';

@NgModule({
    imports: [MatButtonModule, 
              MatToolbarModule, 
              MatInputModule, 
              MatProgressSpinnerModule, 
              MatCardModule, 
              MatExpansionModule, 
              MatIconModule,
              MatListModule],
    exports: [MatButtonModule, 
              MatToolbarModule, 
              MatInputModule, 
              MatProgressSpinnerModule, 
              MatCardModule, 
              MatExpansionModule,
              MatIconModule,
              MatListModule]
})

export class MaterialModule {}
