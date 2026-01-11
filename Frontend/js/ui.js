// Obtener y guardar los estudiantes de la base de datos de  la interfaz de usuario 
//<!--input-name , input-lastname , btn-add-student -->

const inputName = document.querySelector('.input-name');
const inputEmail = document.querySelector('.input-email');
const buttonAddStudent = document.querySelector('.btn-add-student');
const containerBD = document.querySelector('.container-base-datos')

// Funcion para agregar estudiante a la base de datos
export function addDataStudent(){

    function focusBtn(elemento){

        elemento.addEventListener('keydown' , (e) =>{

            if(e.key === 'Enter'){
                e.preventDefault();
                buttonAddStudent.focus();
                buttonAddStudent.click();
    
            }
        })
    }

    focusBtn(inputEmail);
    focusBtn(inputName);

    buttonAddStudent.addEventListener('click' , () => {
        

        let name = inputName.value;
        let email = inputEmail.value;

        if(name.trim() === '' || email.trim() === ''){

            alert('Por favor complete los datos del estudiante para continuar ');

        }

        console.log({ name , email })

        inputName.value = '' ; 
        inputEmail.value = '' ; 
        
        fetch('http://localhost:1234/usuarios/obtener', {

            method : 'POST' , 
            headers : {
                'Content-Type' : 'application/json'
            }, 

            body : JSON.stringify({
                nombre : name , 
                correo : email 
            })
        })
        .then((res ) => res.json())
        .then((data ) => {
            console.log(data)
            renderizarDatosBd()
        })
    
    });
}

// Funcion para listar los usuarios de la base de datos en el frontend
function listarDatosBd(){

    return fetch('http://localhost:1234/usuarios/obtener')
    .then((res) => res.json())
    .then(data => data)
    .catch(e => console.log('Algo ha salido mal al intentar obtener los usuarios de la bd ' + e))
}

export async function renderizarDatosBd(){

    let data = await listarDatosBd();
    containerBD.innerHTML = ''

    for(let i = 0 ; i < data.length ; i ++ ){

        let user = data[i]
        let card = document.createElement('ul')
        card.className = 'card-user'
        card.dataset.id = user.id
        card.innerHTML = `
        <h4>Usuario :</h4> <br>
        <h3>Nombre : ${user.nombre}</h3>
        <h3>Correo : ${user.correo}</h3>
        <button class='btn-delete-user'>Eliminar</button>
        <button class='actualizar-user'>Actualizar</button>`
        
        containerBD.appendChild(card)
    }
    
}

// Funcion para eliminar usuarios de la base de datos 
export function eliminarDatos() {
    containerBD.addEventListener('click', (e) => {
  
      if (e.target.classList.contains('btn-delete-user')) {
  
        const confirmar = confirm('¿Seguro que quieres eliminar este usuario?');
        if (!confirmar) return;
  
        const card = e.target.closest('.card-user'); // la card que se clickeó
        const id = card.dataset.id;                  // id guardado en data-id
  
        fetch(`http://localhost:1234/usuarios/obtener/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          card.remove(); // elimina la card del DOM si todo salió bien
        })
        .catch(err => console.log('Error al eliminar:', err));
      }
  
    });
  }

// Funcion para actualizar usuarios de la base de datos 
export async function actualizarUsuario() {
    containerBD.addEventListener('click' , (e) => {
        if(e.target.classList.contains('actualizar-user')){
            const card = e.target.closest('.card-user')
            const id = card.dataset.id

            const nombre = prompt('Digite el nuevo nombre del usuario')
            const correo = prompt('Digite el nuevo correo del usuario ')

            if(nombre.trim() === '' || correo.trim() === '' ){
                alert('No puedes dejar campos vacios')
                return
            }

            fetch(`http://localhost:1234/usuarios/obtener/${id}`, {
                method : 'PUT' , 
                headers : {
                    'Content-Type' : 'application/json'
                } , body : JSON.stringify({
                    nombre : nombre , 
                    correo : correo
                })})
                .then(res => res.json())

                .then(data => {
                    console.log(data)
                    renderizarDatosBd()
                    alert('Usuario actualizado con exito')

                })
                .catch((e) => {

                    console.error(`Algo ha salido mal al intertar actualizar el usuario ` + e.message )

                })

        }else{

            return

        }

    })

}
  