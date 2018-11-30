<template>
    <div>
        <h2>
            <img src="../../assets/info-icon.png" class="pincipal-logo" width="50px"><br>
            Detalles
        </h2>
        <div class="row" v-if="doctor.address" >
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Nombre: {{ doctor.name }}</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><h4>Teléfono: {{ doctor.phone }}</h4></li>
                        <li class="list-group-item"><h4>Hospital: {{ doctor.company.name }}</h4></li>
                        <li class="list-group-item"><h4>Sitio Web: <a >{{ doctor.website }}</a></h4></li>
                        <li class="list-group-item"><h4>Ciudad: {{ doctor.address.city }}</h4></li>
                        <li class="list-group-item"><h4>Calle: {{ doctor.address.street }}</h4></li>
                        <li class="list-group-item"><h4>Número: {{ doctor.address.suite }}</h4></li>
                        <li class="list-group-item"><h4>CP: {{ doctor.address.zipcode }}</h4></li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-6">
                <img src="../../assets/Doctor.png" alt="" width="100%">
            </div>
        </div>
    </div>
            
    
</template>
<script>
export default {
    data(){
        return{
            id: "",
            doctor :{}
        }
    },
    created(){
        this.id= this.$route.params.id,
        this.$http.get('https://jsonplaceholder.typicode.com/users/'+ this.id)
        .then(e=>{return e.json()})
        .then(doctor=>{this.doctor=doctor; 
        })

    }
}
</script>
<style lang="sass" scoped>
     @import './detail.sass'
</style>


