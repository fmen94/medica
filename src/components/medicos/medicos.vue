<template>
    <div>
        <h2>
             <img src="../../assets/logo.png" class="pincipal-logo" width="50px"><br>
            Médicos
        </h2>
        <ul  class="list-grup">
            <li  class="list-group-item" v-for="(doctor, index) in doctors" :key="index">
                <router-link :to="{ name: 'detail', params: { id:doctor.id } }" class="list" >
               Dr. {{ doctor.name }}
                
                </router-link>
                <img src="../../assets/favorite.png" v-if="srcImage(index,'A')" width="30px" @click="setFavourite(index)" class="align-end">
                <img src="../../assets/favorite-disabled.png" v-if="srcImage(index,'D')" width="30px" @click="setFavourite(index)" class="align-end">
            </li>
            
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                doctors:[],
                favourite:[]
            }
        },
        created(){
            if(localStorage.getItem("doctors")){
                this.doctors=JSON.parse(localStorage.getItem("doctors"))
            }
            else{
                this.$http.get('https://jsonplaceholder.typicode.com/users')
                .then(e=>{return e.json()})
                .then(doctors => {
                    doctors=JSON.parse(JSON.stringify(doctors))
                    this.doctors = doctors
                })
            }
            
        },
        methods:{
            setFavourite(index){
                var doctors=JSON.parse(JSON.stringify(this.doctors))
                doctors[index].favourite ? doctors[index].favourite = false : doctors[index].favourite = true
                this.doctors=doctors
                localStorage.setItem('doctors', JSON.stringify(doctors) )
            },
            srcImage(index,status){
                var doctors=JSON.parse(JSON.stringify(this.doctors))
                if(status=='A'){
                    if(doctors[index].favourite){return true}
                    return false
                }
                if(status=='D'){
                     if(doctors[index].favourite){return false}
                    return true
                }
            }
        }
    }
</script>
<style lang="sass" scoped>
     @import './medicos'
</style>

