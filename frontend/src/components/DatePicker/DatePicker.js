import { useContext } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormContext } from "../../context/FormContext";

function Calendar(props){
    const {formData, setFormData} = useContext(FormContext);

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            [props.name]: date,
        });
    }; 

    return (
        <Form.Group className="my-3">
            <Form.Label>{props.label}</Form.Label>
            <DatePicker
                required 
                selected={props.value} 
                onChange={handleDateChange} 
                dateFormat="dd/MM/YYYY" 
                showYearDropdown
            />
            <Form.Control.Feedback type="invalid">
                Selecione um valor válido para {props.label}
            </Form.Control.Feedback>
        </Form.Group>
    );
}

export default Calendar;