function validarCuit()
    {
       let numero = document.getElementById ("txtCuit").value;
       let respuesta = true;
       let  numeroMagico = "54327654321";
       let suma = 0;
        
       for (let i = 0; i < numeroMagico.length; i++)
       {
          suma += (parseInt(numeroMagico[i]) * parseInt(numero[i]));
       }

       let resto = suma % 11;
       if (resto != 0)
       {
            respuesta = false;
            alert ("El numero ingresado es invalido");
            return false;
            
       }
       else
       {
            respuesta = true;
            alert ("El numero ingresado es correcto");
            return true;
       }
       return respuesta;
       }