import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component'
import { SecondComponent } from './second/second.component';
import {ThirdComponent} from './third/third.component';
import {FourthComponent} from './fourth/fourth.component'
import {FiveComponent} from './five/five.component';
import {SixComponent} from './six/six.component';
import {SevenComponent} from './seven/seven.component';
import {EightComponent} from './eight/eight.component';
import {NineComponent} from './nine/nine.component';
import {TenComponent} from './ten/ten.component';

import { from } from 'rxjs';
 
const routes: Routes = [
  {
    path:'first',
    component:FirstComponent,
    children: [
      {
        path: 'second',
        component:SecondComponent ,
       
        children:[{
          path:'third',
          component:ThirdComponent,
          children:[{
            path:'fourth',
            component:FourthComponent,
            children:[{
              path:'five',
              component:FiveComponent,
              children:[{
                path:'six',
                component:SixComponent,
                children:[{
                  path:'seven',
                  component:SevenComponent,
                  children:[{
                    path:"eight",
                    component:EightComponent,
                    children:[{
                      path:'nine',
                      component:NineComponent,
                      children:[{
                        path:'ten',
                        component:TenComponent
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }]
          
        }]
      }
    ]
  }];
  
//   {
//     path:'third',
//     component:ThirdComponent
//   },
//   {
//     path:'fourth',
//     component:FourthComponent
//   },
//   {
//     path:'five',
//     component:FiveComponent
//   },
//   {
//     path:'six',
//     component:SixComponent
//   },
//   {
//     path:'seven',
//     component:SevenComponent
//   },
//   {
//     path:'eight',
//     component:EightComponent
//   },
//   {
//     path:'nine',
//     component:NineComponent
//   },
//   {
//     path:'ten',
//     component:TenComponent
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
