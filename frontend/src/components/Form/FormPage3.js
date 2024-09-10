import { useContext, useEffect, useState } from "react";
import { FormContext } from "../../context/FormContext";
import { Button, Form } from "react-bootstrap";
import Select from "../Select/Select";
import CheckBox from "../CheckBox/CheckBox";
import { useNavigate } from "react-router-dom";

function FormPage3(){
    const {formData, setFormData} = useContext(FormContext);
    const [validated, setValidated] = useState(false);

    const navigate = useNavigate();

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    let food;
    const handleSelectChange = (e) => {
        const {name, value} = e.target;
        console.log(name);
        console.log(value);
        setFormData({
            ...formData,
            [name]: value,
            food: []
        });

        // console.log(formData);
    };
    
    const handleCheckBoxChange = (e) => {
        const {value, checked} = e.target;
        console.log(value);
        console.log(checked);
        console.log(formData.food);
        let foodChecked = formData.food;
        if (checked){
            foodChecked.push(value);
        } else{
            foodChecked = foodChecked.filter((item) => item !== value);
        }
        console.log(foodChecked);

        setFormData({
            ...formData,
            food: foodChecked,
        });

        // console.log(formData);
    };

    const submitForm = async (e) => {
        console.log(formData);
        const form = e.currentTarget;
        
        if (formData.food.length === 0){
            e.preventDefault();
            e.stopPropagation();
            alert("Selecione pelo menos uma opção de comida");
        }else if (form.checkValidity() === false){
            e.preventDefault();
            e.stopPropagation();
        } else{
            e.preventDefault();
            e.stopPropagation();
            try{
                const response = await fetch("http://127.0.0.1:5000/submitFormulario", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                alert(data["message"]);

                setFormData({
                    food: []
                });
                navigate("/");
            } catch(error){
                console.log(error);
            }
            setValidated(true);
        }

        
    }

    const goPrevPage = () => {
        navigate("/page2");
    };

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getAlimentacao")
        .then((response) => {
            return response.json();
        })
        .then((data) => setData(data))
        .catch((error) => setError(error));
    }, []);

    if(!data){
        return <div>Carregando...</div>
    }

    if(data){
        food = data[formData.foodType];
    }

    return (
        <div className="container d-flex flex-column my-3">
            <Form noValidate validated={validated} onSubmit={submitForm}>
                <Select
                    label="Selecione seu tipo de alimentação:"
                    options={Object.keys(data)}
                    name="foodType"
                    value={formData.foodType}
                    onChange={handleSelectChange}></Select>
                
                <CheckBox
                    label="Preencha os tipos de alimento que você consome diariamente:"
                    name="food"
                    items={food}
                    value={formData.food}
                    onChange={handleCheckBoxChange}></CheckBox>
                
                <Button variant="light" onClick={goPrevPage}>Anterior</Button>
                <Button variant="primary" type="submit">Enviar</Button>
            </Form>
        </div>
    );
}

export default FormPage3;