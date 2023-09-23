Vue.component('forms-monster', {
    data: function(){
        return {
            verificar: {
                nombre: false,
                apodo: false,
                profesion: false,
                peso: false,
                altura: false,
                color: false,
            },
            monstruo: {
                nombre:"",
                apodo:"",
                profesion:"",
                peso:"",
                altura:"",
                color:"",
            },
            arrayMonstruos: [],
        }
    },
    template: `
        <div class="forms-display">
            <form v-on:submit.prevent>
                <div class="gridForms">
                    <div>
                        <label for="nombre">Nombre</label>
                        <input type="text" id="nombre" v-model="monstruo.nombre">
                        <p :class=" verificar.nombre ? 'mostrarError' : 'ocultarError' ">Ingrese un nombre</p>
                    </div>
                    <div>
                        <label for="apodo">Apodo</label>
                        <input type="text" id="apodo" v-model="monstruo.apodo">
                        <p :class=" verificar.apodo ? 'mostrarError' : 'ocultarError' ">Ingrese un apodo</p>
                    </div>
                    <div>
                        <label for="profesion">Profesión</label>
                        <input type="text" id="profesion" v-model="monstruo.profesion">
                        <p :class="verificar.profesion ? 'mostrarError' : 'ocultarError' ">Ingrese una profesión</p>
                    </div>
                    <div>
                        <label for="peso">Peso</label>
                        <input type="number" id="peso" v-model="monstruo.peso">
                        <p :class=" verificar.peso ? 'mostrarError' : 'ocultarError' ">Ingrese un peso mayor a 0</p>
                    </div>
                    <div>
                        <label for="altura">Altura</label>
                        <input type="text" id="altura" v-model="monstruo.altura">
                        <p :class="verificar.altura ? 'mostrarError' : 'ocultarError' ">Ingrese una altura mayor a 0</p>
                    </div>
                    <div>
                        <label for="color">Color</label>
                        <select id="color">
                            <option value="verde">Verde</option>
                            <option value="azul">Azul</option>
                            <option value="violeta">Violeta</option>
                        </select>
                        <p>Ingrese un color</p>
                    </div>
                </div>
                <atributos-monster></atributos-monster>
                <div>
                    <button @click="validarCampos(monstruo)">Crear monstruo</button>
                </div>
            </form>
            <div class="cardPrincipal">
                <p> {{this.monstruo.nombre | uppercase}} </p>
                <p> {{this.monstruo.apodo | capitalize}} </p>
                <p> {{this.monstruo.profesion | capitalize}} </p>
                <p> {{this.monstruo.peso}}kg</p>
                <p> {{this.monstruo.altura}}cm</p>
            </div>
        </div>
    `,
    methods:{
        validarCampos(){
            if(this.monstruo.nombre === ""){
                this.verificar.nombre = true;
            }else {
                this.verificar.nombre = false;
                if(this.monstruo.apodo === ""){
                    this.verificar.apodo = true;
                }else {
                    this.verificar.apodo = false;
                    if(this.monstruo.profesion === ""){
                        this.verificar.profesion = true;
                    }else {
                        this.verificar.profesion = false;
                        if(this.monstruo.peso <= 0){
                            this.verificar.peso = true;
                        }else {
                            this.verificar.peso = false;
                            if(this.monstruo.altura <= 0){
                                this.verificar.altura = true;
                            }else {
                                this.verificar.altura = false;
                                this.enviarFormulario(this.monstruo)
                            };
                        }
                    }
                }
            }
        },

        enviarFormulario(monstruo){
            this.arrayMonstruos.push(monstruo);
            this.monstruo = {nombre:"", apodo:"", profesion:"", peso:"", altura:""};
            console.log(this.arrayMonstruos);
        },

    }
    })

Vue.component('atributos-monster', {
    data:function(){
        return{}
    },
    template: `
        <section>
            <div>
                <h2>Elige los atributos de tu monstruo</h2>
                <div>
                    <span>15</span>
                </div>
            </div>
                <p>Tienes 15 puntos para distribuir entre los atributos de tu monstruo. Recuerda que si no utilizas todos los puntos ¡tu monstruo será menos poderoso!</p>
            <div>
            <div>
                <p>Fuerza</p>
                <div>
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                </div>
            </div>
            <div>
                <p>Agilidad</p>
                <div>
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                </div>
            </div>
            <div>
                <p>Inteligencia</p>
                <div>
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                </div>
            </div>
        </section>
    `
})

var app = new Vue({
    el: '.container',
    data: {

    },
    methods:{
        // mostrarMonstruoActual(){
            
        // }
    }
})