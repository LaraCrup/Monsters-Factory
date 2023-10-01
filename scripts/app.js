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
                {text: 'Verde', value: 'verde', url: '../img/monstruo_verde.png', alt:'monstruo verde'},
                {text: 'Azul', value: 'azul', url: '../img/monstruo_azul.png', alt:'monstruo azul'},
                {text: 'Violeta', value: 'violeta', url: '../img/monstruo_violeta.png', alt:'monstruo violeta'},
                {text: 'Rosa', value: 'rosa', url: '../img/monstruo_rosa.png', alt:'monstruo rosa'},
                {text: 'Amarillo', value: 'amarillo', url: '../img/monstruo_amarillo.png', alt:'monstruo amarillo'}
            ],
            cantFuerza: 0,
            cantAgilidad: 0,
            cantInteligencia: 0,
            puntos: 15,
            arrayMonstruos: [],
        }
    },
    template: `
        <div class="forms-display">
            <form v-on:submit.prevent>
                <fieldset class="gridForms">
                    <div class="form-fila">
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
                    </div>
                    <div class="form-fila">
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
                </fieldset>
                <fieldset class="sectionAtributos">
                    <div class="h2-span">
                        <h2>Elige los atributos de tu monstruo</h2>
                        <div class="divSpanPuntos">
                            <span>{{puntos}}</span>
                        </div>
                    </div>
                    <div class="pDescripcion">
                        <p>Tienes 15 puntos para distribuir entre los atributos de tu monstruo. Recuerda que si no utilizas todos los puntos ¡tu monstruo será menos poderoso!</p>
                    </div>
                    <div class="divAtributos">
                        <div>
                            <p>Fuerza</p>
                            <div>
                                <button class="btnResta" @click="bajarOSubirCant('menos', 'fuerza')">-</button>
                                <span>{{cantFuerza}}</span>
                                <button class="btnSuma" @click="bajarOSubirCant('mas', 'fuerza')">+</button>
                            </div>
                        </div>
                        <div>
                            <p>Agilidad</p>
                            <div>
                                <button class="btnResta" @click="bajarOSubirCant('menos', 'agilidad')">-</button>
                                <span>{{cantAgilidad}}</span>
                                <button class="btnSuma" @click="bajarOSubirCant('mas', 'agilidad')">+</button>
                            </div>
                        </div>
                        <div>
                            <p>Inteligencia</p>
                            <div>
                                <button class="btnResta" @click="bajarOSubirCant('menos', 'inteligencia')">-</button>
                                <span>{{cantInteligencia}}</span>
                                <button class="btnSuma" @click="bajarOSubirCant('mas', 'inteligencia')">+</button>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div class="btnCrear">
                    <button @click="validarCampos(monstruo)">Crear monstruo</button>
                </div>
            </form>
            <div class="cardPrincipal">
                <p> {{this.monstruo.nombre | uppercase}} </p>
                <p> {{this.monstruo.apodo | capitalize}} </p>
                <div class="divImgMonstruo">
                    <img v-if="monstruo.color" :src="obtenerUrlImg(monstruo.color)" :alt="obtenerAltImg(monstruo.color)"> 
                </div>
                <p> {{this.monstruo.profesion | capitalize}} </p>
                <p> {{this.monstruo.peso}}kg </p>
                <p> {{this.monstruo.altura}}cm </p>
                <p> {{this.monstruo.color}} </p>
                <p> {{this.cantFuerza}} </p>
                <p> {{this.cantAgilidad}} </p>
                <p> {{this.cantInteligencia}} </p>

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

        bajarOSubirCant(modificacion, atributo){
            if(this.puntos <= 0){
                this.puntos = 0;
                if(modificacion  === 'menos'){
                    if(atributo === 'fuerza'){
                            this.cantFuerza --;
                            this.puntos ++;
                    }
                    if(atributo === 'agilidad'){
                        this.cantAgilidad --;
                        this.puntos ++;
                    }
                    if(atributo === 'inteligencia'){
                        this.cantInteligencia --;
                        this.puntos ++;
                    }
                }
            }else {
                if(atributo === 'fuerza'){
                    if(modificacion === 'mas'){
                        this.cantFuerza ++;
                        this.puntos --;
                    }else if(modificacion === 'menos'){
                        if(this.cantFuerza > 0){
                            this.cantFuerza --;
                            this.puntos ++;
                        }else if(this.cantFuerza < 0){
                            this.cantFuerza = 0;
                        }
                    }
                }else if(atributo === 'agilidad'){
                    if(modificacion === 'mas'){
                        this.cantAgilidad ++;
                        this.puntos --;
                    }else if(modificacion === 'menos'){
                        if(this.cantAgilidad > 0){
                            this.cantAgilidad --;
                            this.puntos ++;
                        }else if(this.cantAgilidad < 0){
                            this.cantAgilidad = 0;
                        }
                    }
                }else if(atributo === 'inteligencia'){
                    if(modificacion === 'mas'){
                        this.cantInteligencia ++;
                        this.puntos --;
                    }else if(modificacion === 'menos'){
                        if(this.cantInteligencia > 0){
                            this.cantInteligencia --;
                            this.puntos ++;
                        }else if(this.cantInteligencia < 0){
                            this.cantInteligencia = 0;
                        }
                    }
                }
            }
        },

        obtenerUrlImg(colorSeleccionado) {
            for (const option of this.options) {
                if (option.value === colorSeleccionado) {
                    return option.url;
                }
            }
            return '';
        },
        
        obtenerAltImg(colorSeleccionado) {
            for (const option of this.options) {
                if (option.value === colorSeleccionado) {
                    return option.alt;
                }
            }
            return ''; 
        },

    }
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