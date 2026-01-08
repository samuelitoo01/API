// Obtener y guardar los estudiantes de la base de datos de  la interfaz de usuario 
//<!--input-name , input-lastname , btn-add-student -->

const inputName = document.querySelector('.input-name')
const inputLastName = document.querySelector('.input-lastname')
const buttonAddStudent = document.querySelector('.btn-add-student')

buttonAddStudent.addEventListener('click' , () => {

    let name = inputName.value
    let lastname = inputLastName.value

    if(name.trim() === '' && lastname.trim() === ''){

        const estudiante = {

            name : name , 
            lastname : lastname 

        }
    }

    fetch(url , {
        method : 'POST' , 
        
    })
})