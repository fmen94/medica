import HomeComponent from './components/home/home.vue'
import MedicosComponent from './components/medicos/medicos.vue'
import FavoritesComponent from './components/favorites/favorites.vue'
import LoginComponent from './components/login/login.vue'
import DetailComponent from './components/detail/detail.vue'


export const routes = [
    {path:'', component: HomeComponent},
    {path:'/medicos', component: MedicosComponent},
    {path: '/medicos/:id' , component: DetailComponent ,name: 'detail'},
    {path:'/favorites', component: FavoritesComponent},
    {path:'/favorites/:id', component: DetailComponent},
    {path:'/login', component: LoginComponent},
    {path:'*', redirect: '/'},
]