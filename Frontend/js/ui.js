// Obtener y guardar los estudiantes de la base de datos de  la interfaz de usuario 
//<!--input-name , input-lastname , btn-add-student -->

const inputName = document.querySelector('.input-name');
const inputLastName = document.querySelector('.input-lastname');
const buttonAddStudent = document.querySelector('.btn-add-student');

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

    focusBtn(inputLastName);
    focusBtn(inputName);

    buttonAddStudent.addEventListener('click' , () => {

        let name = inputName.value;
        let lastname = inputLastName.value;

        if(name.trim() === '' && lastname.trim() === ''){

            alert('Por favor complete los datos del estudiante para continuar ');

        }

        // console.log({ name , lastname })

        inputName.value = '' ; 
        inputLastName.value = '' ; 
    });
}