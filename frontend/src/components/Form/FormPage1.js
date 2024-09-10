import { Button, Card, Form } from "react-bootstrap";
import TextField from "../TextField/TextField";
import Select from "../Select/Select";
import Radio from "../Radio/Radio";
import EmailField from "../TextField/EmailField";
import Calendar from "../DatePicker/DatePicker";
import NumberField from "../NumberField/NumberField";
import { useContext, useState } from "react";
import { FormContext } from "../../context/FormContext";
import { useNavigate } from "react-router-dom";

function FormPage1(){
    const {formData, setFormData} = useContext(FormContext);
    const [validated, setValidated] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(name);
        console.log(value);
        setFormData({
            ...formData,
            [name]: value,
        });

        console.log(formData);
    };

    const goNextPage = (e) => {
        const form = e.currentTarget;
        
        if (formData.correctData === "Não"){
            e.preventDefault();
            e.stopPropagation();
            alert(`A opção "Os dados acima estão corretos?" foi marcada como "Não", corrija para prosseguir.`);
        }else if (form.checkValidity() === false){
            e.preventDefault();
            e.stopPropagation();
        } else{
            navigate("/page2");
        }
        
        setValidated(true);
    };

    return (
        <div className="container d-flex flex-column my-3">
            <Form noValidate validated={validated} onSubmit={goNextPage}>
                <TextField 
                    label="Nome Completo"
                    name="name"
                    value={formData.name || ""}
                    onChange={handleChange}
                />
                <TextField 
                    label="Matrícula/CPF"
                    name="cpf"
                    value={formData.cpf || ""}
                    onChange={handleChange}
                />
                <TextField 
                    label="Cargo"
                    name="role"
                    value={formData.role || ""}
                    onChange={handleChange}
                />
                <TextField 
                    label="Cidade"
                    name="city"
                    value={formData.city || ""}
                    onChange={handleChange}
                />
                
                <Select 
                    label="Estado" 
                    options={["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", 
                        "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"]}
                    name="uf"
                    value={formData.uf}
                    onChange={handleChange}></Select>

                
                <Radio 
                    label="Os dados acima estão corretos?" 
                    radios={["Sim", "Não"]} 
                    name="correctData"
                    value={formData.correctData}
                    onChange={handleChange}></Radio>
                <Radio 
                    label="Titularidade" 
                    radios={["Titular", "Dependente"]} 
                    name="ownership"
                    value={formData.ownership}
                    onChange={handleChange}></Radio>
                
                <TextField 
                    label="Telefone com DDD"
                    name="telephone"
                    value={formData.telephone || ""}
                    onChange={handleChange}
                    pattern="\(\d{2}\) \d{4,5}-\d{4}"
                />

                <EmailField 
                    label="E-mail"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleChange}
                />

                <Calendar 
                    label="Data de nascimento"
                    name="birthDate"
                    value={formData.birthDate || new Date()}></Calendar>

                <Radio 
                    label="Sexo biológico" 
                    radios={["Feminino", "Masculino"]} 
                    name="sex"
                    value={formData.sex}
                    onChange={handleChange}></Radio>

                <NumberField 
                    label="Peso"
                    name="weight"
                    value={formData.weight || ""}
                    onChange={handleChange}
                />
                <NumberField 
                    label="Altura (em cm)"
                    name="height"
                    value={formData.height || ""}
                    onChange={handleChange}
                />
                
                <Card className="my-3">
                    <Card.Header>Pressão Arterial</Card.Header>
                    <Card.Body>
                    <Card.Text>A pressão é popularmente medida como "máxima x mínima". 
                        Exemplos: Se a sua pressão costuma ser 12x8, selecione máxima: "de 120 a 129" e a mínima "de 80 a 84". 
                        Se a sua pressão costuma ser 10x6, selecione máxima: "menor que 120" e a mínima: "Menor que 80".</Card.Text>
                        <Select 
                            label="Pressão sistólica (máxima)" 
                            options={["Menor que 120", "De 120 a 129", "De 130 a 139", "De 140 a 159", 
                            "De 160 a 179", "180 ou maior"]}
                            name="maxPressure"
                            value={formData.maxPressure}
                            onChange={handleChange}></Select>
                        
                        <Select 
                            label="Pressão diastólica (mínima)" 
                            options={["Menor que 120", "De 120 a 129", "De 130 a 139", "De 140 a 159", 
                            "De 160 a 179", "180 ou maior"]}
                            name="minPressure"
                            value={formData.minPressure}
                            onChange={handleChange}></Select>
                    </Card.Body>
                </Card>

                <Button variant="light" type="submit">Próximo</Button>
            </Form>
        </div>
    );
}

export default FormPage1;