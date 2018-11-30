<template>
    <div>
        <h2>
            <img src="../../assets/favorite.png" class="pincipal-logo" width="50px"><br>
            Favoritos
        </h2>
        <ul  class="list-grup">
                <router-link tag="li" :to="{ name: 'detail', params: { id:doctor.id } }" class="list-group-item" v-for="(doctor, index) in doctors" :key="index" v-if="doctor.favourite" >
                    Dr. {{ doctor.name }} - tel: -{{ doctor.phone}}
                    <img src="../../assets/info-icon.png" class="align-end" width="25px"><br>
                </router-link>
            
            
        </ul>
    </div>
    
    
</template>
<script>
export default{
    data(){
            return{
                doctors:[]
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
}
</script>
<style lang="sass" scoped>
     @import './favorites.sass'
</style>
