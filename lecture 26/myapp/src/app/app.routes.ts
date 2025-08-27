import { Routes } from '@angular/router';
import { Onlineapplication } from './onlineapplication/onlineapplication';
import { Appliances } from './appliances/appliances';
import { Electronic } from './electronic/electronic';
import { Fashion } from './fashion/fashion';
import { Login } from './login/login';
import { Notfound } from './notfound/notfound';
import { Furniture } from './furniture/furniture';
import { Lighting } from './lighting/lighting';
import { Mobile } from './mobile/mobile';
import { Laptop } from './laptop/laptop';
import { Men } from './men/men';
import { Woment } from './woment/woment';

export const routes: Routes = [
    {
        path:'',
        component: Onlineapplication
    },
    {
        path:'appliances', 
        component: Appliances,
        children:[
            {
                path:'furniture',
                component: Furniture
            },
            {
                path:'lighting',
                component: Lighting
            }
        ]
    },
    {
        path:'electronic', 
        component: Electronic,
        children:[
            {
                path:'mobile',
                component: Mobile
            },
            {
                path:'laptop',
                component: Laptop
            }
        ]
    },
    {
        path:'fashion', 
        component: Fashion,
        children:[
            {
                path:'men',
                component: Men
            },
            {
                path:'woment',
                component: Woment
            }
        ]
    },
    {
        path:'login', 
        component: Login
    },
    {
        path:'**', 
        component: Notfound
    }

];
