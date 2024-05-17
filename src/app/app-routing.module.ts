import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";


const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full'},
    { 
        path: 'jobs', 
        loadChildren: () => import('./jobs/jobs.module').then((mod) => mod.JobsModule), 
    },
    { 
        path: 'auth/:status', 
        loadChildren: () => import('./auth/auth.module').then((mod) => mod.AuthModule), 
    }
    ,
    {
        path: 'post',
        loadChildren: () => import('./post/post.module').then((mod) => mod.PostModule)
    }
    
] 

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]

})

export class AppRoutingModule {}
