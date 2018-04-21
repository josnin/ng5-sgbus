import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, 
         MatToolbarModule, 
         MatInputModule, 
         MatProgressSpinnerModule, 
         MatCardModule, 
         MatGridListModule,
         MatTooltipModule,
         MatStepperModule,
         MatExpansionModule,
         MatListModule,
         MatIconModule } from '@angular/material';

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
              MatStepperModule,
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
              MatStepperModule,
              MatListModule]
})

export class MaterialModule {}
