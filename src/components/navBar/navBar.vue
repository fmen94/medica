<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" ><img src="../../assets/logo.png" width="40px"> Médica</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <router-link to="/" tag="a" active-class="active" exact  class="nav-item nav-link" >Inicio </router-link>
            <router-link to="/login"  tag="a" active-class="active" exact class="nav-item nav-link" >Perfil</router-link>
            <router-link to="/medicos"  tag="a" active-class="active" exact class="nav-item nav-link" >Médicos</router-link>
            <router-link to="/favorites"  tag="a" active-class="active" exact class="nav-item nav-link" >Favoritos</router-link>
            </div>
            <div class="align-end">
                <h5 v-if="user" >Hola de nuevo {{user.name}} </h5>
            </div>
        
        </div>
        
    </nav>

</template>
<script>
    export default {
        data(){
            return{
                user: JSON.parse(localStorage.getItem("user"))
            }
        },
        created() {
            if(localStorage.getItem("user")){
                this.user=JSON.parse(localStorage.getItem("user"))
            }
        },
            
        updated() {
        console.log("cambio");
        
    },
    }
</script>
<style lang="sass" scoped>
     @import './navBar'
</style>
