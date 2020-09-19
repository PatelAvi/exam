import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    children : [{
      path : '',
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    },
  {
    path : ':studentId',
    loadChildren : () => import('./student-detail/student-detail.module').then(m => m.StudentDetailPageModule)
  }]
      
    
  
    
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
