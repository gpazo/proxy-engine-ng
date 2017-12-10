import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// NgEngine for NgPacks
import { AppStoreModule } from '../store/store.module'
import { NgEngineService } from './ng-engine.service'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    AppStoreModule
  ],
  declarations: [],
  providers: [
    NgEngineService
  ]
})
export class NgEngineModule { }
