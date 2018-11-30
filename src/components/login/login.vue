<template>
    <div>
        <h2>
            <img src="../../assets/logo.png" class="pincipal-logo" width="50px"><br>
            Registro
        </h2>
        <br>
        <form>
            <h3>-Datos Personales</h3>
            <div class="form-row">
                <div class="col-md-4 mb-3">
                    <label for="validationServer01">Nombre</label>
                    <input type="text" :class="giveClass(profile.name)" placeholder="Ingrase su nombre" v-model="profile.name" >
                    <div class="invalid-feedback">
                        El Nombre no es válido
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="validationServer02">Apellido Paterno</label>
                    <input type="text" :class="giveClass(profile.fName)" placeholder="Ingrse Apellido Paterno" v-model="profile.fName" >
                    <div class="invalid-feedback">
                        El Apellido no es válido
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="validationServer02">Apellido Materno</label>
                    <input type="text" :class="giveClass(profile.sName)" placeholder="Ingrse Apellido Materno" v-model="profile.sName" >
                    <div class="invalid-feedback">
                        El Apellido no es válido
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="validationServerUsername">Usuario</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">@</span>
                    </div>
                    <input type="text" :class="giveClass(profile.username)" placeholder="Escriba su usuario" aria-describedby="inputGroupPrepend3" v-model="profile.username" >
                    <div class="invalid-feedback">
                        El Usuario no es válido
                    </div>
                </div>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="validationServer02">Correo</label>
                    <input type="text" :class="giveClass(profile.email)" placeholder="Ingrse su Correo Electronico" v-model="profile.email" >
                    <div class="invalid-feedback">
                        El Correo no es válido
                    </div>
                </div>
                 <div class="col-md-4 mb-3">
                    <label for="validationServer02">Edad</label>
                    <input type="number" :class="giveClass(profile.age)" placeholder="Ingrse tu edad (solo números)" v-model="profile.age" >
                    <div class="invalid-feedback">
                        la Edad no es válido
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    <label for="validationServer02">Género</label>
                    <select :class="giveClass(profile.gender)" v-model="profile.gender" value="H" >
                        <option value="H" selected>Hombre</option>
                        <option value="M">Mujer</option>
                    </select>
                    <div class="invalid-feedback">
                        El Genero no es válido
                    </div>
                </div>
                 <div class="col-md-4 mb-3">
                    <label for="validationServer02">Fecha de Nacimiento</label>
                    <input type="date" :class="giveClass(profile.birthdate)" v-model="profile.birthdate">
                     <div class="invalid-feedback">
                        El Fecha no es válido
                    </div>
                </div>
                 <div class="col-md-5 mb-3">
                    <label for="validationServer02">No. Seguridad Social</label>
                    <input type="text" :class="giveClass(profile.socialS)" placeholder="Ingrse su número de seguridad social" v-model="profile.socialS" >
                     <div class="invalid-feedback">
                        El No. de seguridad social no es válido
                    </div>
                </div>
            </div>
            <h3>-Dirección</h3>
            <div class="form-row">
                <div class="col-md-4 mb-3">
                    <label for="validationServer03">País</label>
                    <select :class="giveClass(profile.countrie)" v-model="profile.countrie">
                        <option v-for="(countrie, index) in countries" :key="index" >{{ countrie }}</option>
                    </select>
                     <div class="invalid-feedback">
                        El País no es válido
                    </div>
                </div>
                <div class="col-md-4 mb-3" >
                    <label for="validationServer04">Ciudad</label>
                    <select :class="giveClass(profile.city)" v-model="profile.city">
                        <option v-for="(city, index) in cities" :key="index" >{{ city }}</option>
                    </select>
                    <div class="invalid-feedback">
                        La Ciudad no es valida
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="validationServer05">Colonia</label>
                    <input type="text" :class="giveClass(profile.colony)" placeholder="Ingrese su colonia" v-model="profile.colony" >
                    <div class="invalid-feedback">
                        La Colonia no es valida
                    </div>
                </div>
                 <div class="col-md-6 mb-3">
                    <label for="validationServer02">Calle</label>
                    <input type="text" :class="giveClass(profile.street)" placeholder="Ingrese su calle" v-model="profile.street" >
                    <div class="invalid-feedback">
                        La Calle no es valida
                    </div>
                </div>
                 <div class="col-md-3 mb-3">
                    <label for="validationServer02">Número</label>
                    <input type="number" :class="giveClass(profile.number)" placeholder="Número de casa" v-model="profile.number" >
                    <div class="invalid-feedback">
                        El Número no es válido
                    </div>
                </div>
                 <div class="col-md-3 mb-3">
                    <label for="validationServer02">Código postal</label>
                    <input type="number" :class="giveClass(profile.postalC)" placeholder="Ingrese su Código Postal" v-model="profile.postalC" >
                    <div class="invalid-feedback">
                        El Código Postal no es válido
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="form-check">
                <input :class="giveClassCheck(profile.termsC)" type="checkbox" value="false" v-model="profile.termsC" >
                <label class="form-check-label">
                    Aceptar Términos y condiciones
                </label>
                <div class="invalid-feedback">
                   No haz aceptado los términos y condiciones.
                </div>
                </div>
            </div>
            <button type="button" class="btn btn-primary" @click="submitt" >Enviar</button>
        </form>
    </div>
</template>


<script>
import cities from '../../resources/cities.js'
import countries from '../../resources/countries.js'
export default {
    data(){
        return{
            countries: countries.countries,
            cities: cities.cities,
            profile: {},
            sent: false,
            correct:[]
        }
    },
    created(){
            if(localStorage.getItem("user")){
                this.profile=JSON.parse(localStorage.getItem("user"))
            }
    },
    updated() {
    },
    methods:{
        submitt(){
            this.sent=true
            let obj = JSON.parse(JSON.stringify(this.profile))
            var profile=Object.values(obj)
            profile.forEach((e,i) => {
                if(e==""){profile.splice(i,1)}
            });
            if(profile.length==16){
                 localStorage.setItem('user', JSON.stringify(obj) )
            }
        },
        giveClass(elem){
            if(!elem&&this.sent){
            return "form-control is-invalid"}
            else {return "form-control"}
        },
        giveClassCheck(elem){
            if(!elem&&this.sent){return "form-check-input is-invalid"}
            else return "form-check-input"
        },
    },
}
</script>
<style lang="sass" scoped>
     @import './login.sass'
</style>
