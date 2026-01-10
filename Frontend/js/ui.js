// Obtener y guardar los estudiantes de la base de datos de  la interfaz de usuario 
//<!--input-name , input-lastname , btn-add-student -->

const inputName = document.querySelector('.input-name');
const inputEmail = document.querySelector('.input-email');
const buttonAddStudent = document.querySelector('.btn-add-student');
const containerBD = document.querySelector('.container-base-datos')

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
        renderizarDatosBd();

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
        .then((data ) => console.log(data))
    
    });
}

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
        card.innerHTML = `
        Usuario : <br>
        nombre : ${user.nombre}
        correo : ${user.correo}`
        containerBD.appendChild(card)
    }
    
}