import moment from "moment/moment";

class ClassValidate {

    validateDate = (fecha) => {
        // Obtener fecha actual
        const fechaA = moment();
        // Reducir 15 años
        const fechaMinimo = moment(fechaA).subtract(18, 'years');
        // Reducir 7 días
        // const fechaMaximo = moment(fechaA).subtract(60, 'years');
        if (moment(fecha).isBetween( fechaMinimo))
            return false;
        return true;
    }

}

const Validate = new ClassValidate();
export default Validate;