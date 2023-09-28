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
            options: [
                {text: 'Seleccione', value: ''},
                {text: 'Verde', value: 'verde'},
                {text: 'Azul', value: 'azul'},
                {text: 'Violeta', value: 'violeta'}
            ],
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
                        <input type="number" id="peso" v-model.number="monstruo.peso">
                        <p :class=" verificar.peso ? 'mostrarError' : 'ocultarError' ">Ingrese un peso mayor a 0</p>
                    </div>
                    <div>
                        <label for="altura">Altura</label>
                        <input type="number" id="altura" v-model.number="monstruo.altura">
                        <p :class="verificar.altura ? 'mostrarError' : 'ocultarError' ">Ingrese una altura mayor a 0</p>
                    </div>
                    <div class="selectForm">
                        <label for="color">Color</label>
                        <select id="color" v-model="monstruo.color">
                            <option v-for="item in options" v-bind:value="item.value">
                                {{item.text}}
                            </option>
                        </select>
                        <p :class="verificar.color ? 'mostrarError' : 'ocultarError' ">Ingrese un color</p>
                    </div>
                </div>
                <atributos-monster></atributos-monster>
                <div class="btnCrear">
                    <button @click="validarCampos(monstruo)">Crear monstruo</button>
                </div>
            </form>
            <div class="cardPrincipal">
                <p> {{this.monstruo.nombre | uppercase}} </p>
                <p> {{this.monstruo.apodo | capitalize}} </p>
                <p> {{this.monstruo.profesion | capitalize}} </p>
                <p> {{this.monstruo.peso}}kg </p>
                <p> {{this.monstruo.altura}}cm </p>
                <p> {{this.monstruo.color}} </p>
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
                                if(this.monstruo.color === ""){
                                    this.verificar.color = true;
                                }else {
                                    this.verificar.color = false;
                                    this.enviarFormulario(this.monstruo);
                                }
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
        <section class="sectionAtributos">
            <div class="h2-span">
                <h2>Elige los atributos de tu monstruo</h2>
                <div class="divSpanPuntos">
                    <span>15</span>
                </div>
            </div>
            <div class="pDescripcion">
                <p>Tienes 15 puntos para distribuir entre los atributos de tu monstruo. Recuerda que si no utilizas todos los puntos ¡tu monstruo será menos poderoso!</p>
            </div>
            <div class="divAtributos">
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