Vue.component('forms-monster', {
    data: function(){
        return {}
    },
    template: `
        <form v-on:submit.prevent>
            <h1>Creá tu monstruo aterrador</h1>
            <div>
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre">
                <p>Ingrese un nombre</p>
            </div>
            <div>
                <label for="apodo">Apodo</label>
                <input type="text" id="apodo">
                <p>Ingrese un apodo</p>
            </div>
            <div>
                <label for="profesion">Profesión</label>
                <input type="text" id="profesion">
                <p>Ingrese una profesión</p>
            </div>
            <div>
                <label for="peso">Peso</label>
                <input type="number" id="peso">
                <p>Ingrese un peso mayor a 0</p>
            </div>
            <div>
                <label for="altura">Altura</label>
                <input type="text" id="altura">
                <p>Ingrese una altura mayor a 0</p>
            </div>
            <div>
                <label for="color">Color</label>
                <select id="color">
                    <option value=""></option>
                </select>
                <p>Ingrese un color</p>
            </div>
            <atributos-monster></atributos-monster>
            <div>
                <button>Crear monstruo</button>
            </div>
        </form>
    `
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
        </div>
    </section>
    `
})

var app = new Vue({
    el: '.container',
    data: {

    }
})