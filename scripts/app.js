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
                imagen:"",
                alt:"",
                cantFuerza: 0,
                cantAgilidad: 0,
                cantInteligencia: 0,
            },
            options: [
                {text: 'Seleccione', value: ''},
                {text: 'Verde', value: 'verde', url: '../img/monstruo_verde.png', alt:'monstruo verde'},
                {text: 'Azul', value: 'azul', url: '../img/monstruo_azul.png', alt:'monstruo azul'},
                {text: 'Violeta', value: 'violeta', url: '../img/monstruo_violeta.png', alt:'monstruo violeta'},
                {text: 'Rosa', value: 'rosa', url: '../img/monstruo_rosa.png', alt:'monstruo rosa'},
                {text: 'Amarillo', value: 'amarillo', url: '../img/monstruo_amarillo.png', alt:'monstruo amarillo'}
            ],
            puntos: 15,
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
                            <div class="divError">
                                <p :class=" verificar.nombre ? 'mostrarError' : 'ocultarError' ">Ingrese un nombre</p>
                            </div>
                        </div>
                        <div>
                            <label for="apodo">Apodo</label>
                            <input type="text" id="apodo" v-model="monstruo.apodo">
                            <div class="divError">
                                <p :class=" verificar.apodo ? 'mostrarError' : 'ocultarError' ">Ingrese un apodo</p>
                            </div>
                        </div>
                        <div>
                            <label for="profesion">Profesión</label>
                            <input type="text" id="profesion" v-model="monstruo.profesion">
                            <div class="divError">
                                <p :class="verificar.profesion ? 'mostrarError' : 'ocultarError' ">Ingrese una profesión</p>
                            </div>
                        </div>
                    </div>
                    <div class="form-fila">
                        <div>
                            <label for="peso">Peso</label>
                            <input type="number" id="peso" v-model.number="monstruo.peso">
                            <div class="divError">
                                <p :class=" verificar.peso ? 'mostrarError' : 'ocultarError' ">Ingrese un peso mayor a 0</p>
                            </div>
                        </div>
                        <div>
                            <label for="altura">Altura</label>
                            <input type="number" id="altura" v-model.number="monstruo.altura">
                            <div class="divError">
                                <p :class="verificar.altura ? 'mostrarError' : 'ocultarError' ">Ingrese una altura mayor a 0</p>
                            </div>
                        </div>
                        <div class="selectForm">
                            <label for="color">Color</label>
                            <select id="color" v-model="monstruo.color">
                                <option v-for="item in options" v-bind:value="item.value">
                                    {{item.text}}
                                </option>
                            </select>
                            <div class="divError">
                                <p :class="verificar.color ? 'mostrarError' : 'ocultarError' ">Ingrese un color</p>
                            </div>
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
                                <span>{{monstruo.cantFuerza}}</span>
                                <button class="btnSuma" @click="bajarOSubirCant('mas', 'fuerza')">+</button>
                            </div>
                        </div>
                        <div>
                            <p>Agilidad</p>
                            <div>
                                <button class="btnResta" @click="bajarOSubirCant('menos', 'agilidad')">-</button>
                                <span>{{monstruo.cantAgilidad}}</span>
                                <button class="btnSuma" @click="bajarOSubirCant('mas', 'agilidad')">+</button>
                            </div>
                        </div>
                        <div>
                            <p>Inteligencia</p>
                            <div>
                                <button class="btnResta" @click="bajarOSubirCant('menos', 'inteligencia')">-</button>
                                <span>{{monstruo.cantInteligencia}}</span>
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
                <div class="divH3">
                    <h3 v-if="monstruo.nombre !== ''">{{ monstruo.nombre | uppercase }} <span v-if="monstruo.apodo !== ''">"{{ monstruo.apodo | capitalize }}"</span></h3>
                </div>
                <div class="divImgMonstruo">
                    <img v-if="monstruo.color" :src="obtenerUrlImg(monstruo.color)" :alt="obtenerAltImg(monstruo.color)"> 
                </div>
                <div class="divProfesion">
                    <p v-if="monstruo.profesion !== ''"><strong>Profesión:</strong> {{this.monstruo.profesion | capitalize}} </p>
                </div>
                <div class="divPeso">
                    <p v-if="monstruo.peso > 0"><strong>Peso:</strong> {{this.monstruo.peso}} kg </p>
                </div>
                <div class="divAltura">
                    <p v-if="monstruo.altura > 0"><strong>Altura:</strong> {{this.monstruo.altura}} cm </p>
                </div>
                <div class="divAtributosCard">
                    <p><strong>Fuerza:</strong> {{this.monstruo.cantFuerza}} </p>
                    <p><strong>Agilidad:</strong> {{this.monstruo.cantAgilidad}} </p>
                    <p><strong>Inteligencia:</strong> {{this.monstruo.cantInteligencia}} </p>
                </div>
            </div>
        </div>
    `,
    props: ['agregarMonstruo'],
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
            this.agregarMonstruo(monstruo);
            this.monstruo = {nombre:"", apodo:"", profesion:"", peso:"", altura:"", cantFuerza: 0, cantAgilidad: 0, cantInteligencia: 0};
            this.puntos = 15;
        },

        bajarOSubirCant(modificacion, atributo){
            if(this.puntos <= 0){
                this.puntos = 0;
                if(modificacion  === 'menos'){
                    if(atributo === 'fuerza'){
                            this.monstruo.cantFuerza --;
                            this.puntos ++;
                    }
                    if(atributo === 'agilidad'){
                        this.monstruo.cantAgilidad --;
                        this.puntos ++;
                    }
                    if(atributo === 'inteligencia'){
                        this.monstruo.cantInteligencia --;
                        this.puntos ++;
                    }
                }
            }else {
                if(atributo === 'fuerza'){
                    if(modificacion === 'mas'){
                        this.monstruo.cantFuerza ++;
                        this.puntos --;
                    }else if(modificacion === 'menos'){
                        if(this.monstruo.cantFuerza > 0){
                            this.monstruo.cantFuerza --;
                            this.puntos ++;
                        }else if(this.monstruo.cantFuerza < 0){
                            this.monstruo.cantFuerza = 0;
                        }
                    }
                }else if(atributo === 'agilidad'){
                    if(modificacion === 'mas'){
                        this.monstruo.cantAgilidad ++;
                        this.puntos --;
                    }else if(modificacion === 'menos'){
                        if(this.monstruo.cantAgilidad > 0){
                            this.monstruo.cantAgilidad --;
                            this.puntos ++;
                        }else if(this.monstruo.cantAgilidad < 0){
                            this.monstruo.cantAgilidad = 0;
                        }
                    }
                }else if(atributo === 'inteligencia'){
                    if(modificacion === 'mas'){
                        this.monstruo.cantInteligencia ++;
                        this.puntos --;
                    }else if(modificacion === 'menos'){
                        if(this.monstruo.cantInteligencia > 0){
                            this.monstruo.cantInteligencia --;
                            this.puntos ++;
                        }else if(this.monstruo.cantInteligencia < 0){
                            this.monstruo.cantInteligencia = 0;
                        }
                    }
                }
            }
        },

        obtenerUrlImg(colorSeleccionado) {
            for (const option of this.options) {
                if (option.value === colorSeleccionado) {
                    this.monstruo.imagen = option.url;
                    return option.url;
                }
            }
            return '';
        },
        
        obtenerAltImg(colorSeleccionado) {
            for (const option of this.options) {
                if (option.value === colorSeleccionado) {
                    this.monstruo.alt = option.alt;
                    return option.alt;
                }
            }
            return ''; 
        },

    }
})

Vue.component('cards-guardadas', {
    data: function () {
        return {

        }
    },
    props: ['arrayMonstruos'],
    template: `
        <section class="minicards">
            <article v-for="(monstruo, index) in arrayMonstruos" class="card">
                <div class="divH4">
                    <h4>{{ monstruo.nombre | uppercase }} "{{ monstruo.apodo | capitalize }}"</h4> <span class="XCerrar" @click="eliminarCard(index)">X</span>
                </div>
                <div class="divImgMonstruoCards">
                    <img :src="monstruo.imagen" :alt="monstruo.alt"> 
                </div>
                <div class="divProfesionCards">
                    <p><strong>Profesión:</strong> {{monstruo.profesion | capitalize}} </p>
                </div>
                <div class="divPesoCards">
                    <p><strong>Peso:</strong> {{monstruo.peso}} kg </p>
                </div>
                <div class="divAlturaCards">
                    <p><strong>Altura:</strong> {{monstruo.altura}} cm </p>
                </div>
                <div class="divAtributosCardChica">
                    <p><strong>Fuerza:</strong> {{monstruo.cantFuerza}} </p>
                    <p><strong>Agilidad:</strong> {{monstruo.cantAgilidad}} </p>
                    <p><strong>Inteligencia:</strong> {{monstruo.cantInteligencia}} </p>
                </div>
            </article>
        </section>
    `,
    methods:{
        eliminarCard(index){
            this.arrayMonstruos.splice(index, 1);
            localStorage.setItem('local', JSON.stringify(this.arrayMonstruos));
        }
    }
})

var app = new Vue({
    el: '.container',
    data: {
        arrayMonstruos: [],
    },
    methods:{
        agregarMonstruo(nuevoMonstruo) {
            if (!localStorage.local) {
                this.arrayMonstruos=[]
            } else {
                this.arrayMonstruos=JSON.parse(localStorage.getItem('local'))
            }
            this.arrayMonstruos.push(nuevoMonstruo);
            localStorage.setItem('local', JSON.stringify(this.arrayMonstruos))
        },
    }
})

if (localStorage.local) {
    app.arrayMonstruos = JSON.parse(localStorage.getItem('local'));
}