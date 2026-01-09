// Obtener y guardar los estudiantes de la base de datos de  la interfaz de usuario 
//<!--input-name , input-lastname , btn-add-student -->

const inputName = document.querySelector('.input-name');
const inputEmail = document.querySelector('.input-email');
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

    focusBtn(inputEmail);
    focusBtn(inputName);

    buttonAddStudent.addEventListener('click' , () => {

        let name = inputName.value;
        let email = inputEmail.value;

        if(name.trim() === '' && email.trim() === ''){

            alert('Por favor complete los datos del estudiante para continuar ');

        }

        console.log({ name , email })

        inputName.value = '' ; 
        inputEmail.value = '' ; 
    });
}