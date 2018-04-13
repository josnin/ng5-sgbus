import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, 
         MatToolbarModule, 
         MatInputModule, 
         MatProgressSpinnerModule, 
         MatCardModule, 
         MatGridListModule,
         MatTooltipModule,
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
              MatGridListModule,
              MatTooltipModule,
              MatListModule],
    exports: [MatButtonModule, 
              MatToolbarModule, 
              MatInputModule, 
              MatProgressSpinnerModule, 
              MatCardModule, 
              MatExpansionModule,
              MatIconModule,
              MatGridListModule,
              MatTooltipModule,
              MatListModule]
})

export class MaterialModule {}
