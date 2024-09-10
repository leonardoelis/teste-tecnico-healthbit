import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Radio from "../Radio/Radio";
import { useContext, useState } from "react";
import { FormContext } from "../../context/FormContext";
import { useNavigate } from "react-router-dom";
import TextFieldOptional from "../TextField/TextFieldOptional";

function FormPage2(){
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
        
        if (form.checkValidity() === false){
            e.preventDefault();
            e.stopPropagation();
        } else{
            navigate("/page3");
        }

        setValidated(true);
    };

    const goPrevPage = () => {
        navigate("/");
    };

    return (
        <div className="container d-flex flex-column my-3">
            <Form noValidate validated={validated} onSubmit={goNextPage}>
                <Card className="my-3">
                    <Card.Header>Preencha apenas as doenças que você tem ou já teve</Card.Header>
                    <Card.Body>
                    <Card className="container my-3">
                        <Row>
                            <Col>
                                <Radio 
                                    label="Diabetes" 
                                    radios={["Tenho", "Não tenho", "Não sei"]} 
                                    name="diabetes"
                                    value={formData.diabetes}
                                    onChange={handleChange}></Radio>
                            </Col>
                            <Col>
                                <Radio 
                                    label="Problemas Cardíacos" 
                                    radios={["Tenho", "Não tenho", "Já tive, mas me curei"]} 
                                    name="cardiac"
                                    value={formData.cardiac}
                                    onChange={handleChange}></Radio>
                            </Col>
                            <Col>
                                <Radio 
                                    label="Pressão Alta" 
                                    radios={["Tenho", "Não tenho", "Não sei"]} 
                                    name="pressure"
                                    value={formData.pressure}
                                    onChange={handleChange}></Radio>
                            </Col>
                        </Row>
                    </Card>

                    <Card className="container my-3">
                        <Row>
                            <Col>
                                <Radio 
                                    label="Asma" 
                                    radios={["Tenho", "Não tenho"]} 
                                    name="asthma"
                                    value={formData.asthma}
                                    onChange={handleChange}></Radio>
                            </Col>
                            <Col>
                                <Radio 
                                    label="Depressão" 
                                    radios={["Tenho", "Não tenho"]} 
                                    name="depression"
                                    value={formData.depression}
                                    onChange={handleChange}></Radio>
                            </Col>
                            <Col>
                                <Radio 
                                    label="Ansiedade" 
                                    radios={["Tenho", "Não tenho"]} 
                                    name="anxiety"
                                    value={formData.anxiety}
                                    onChange={handleChange}></Radio>
                            </Col>
                        </Row>
                    </Card>

                    <Card className="container my-3">
                        <Row>
                            <Col>
                                <Radio 
                                    label="Colesterol Alto" 
                                    radios={["Tenho", "Não tenho", "Não sei"]} 
                                    name="cholesterol"
                                    value={formData.cholesterol}
                                    onChange={handleChange}></Radio>
                            </Col>
                            <Col>
                                <Radio 
                                    label="Dores nas Costas" 
                                    radios={["Tenho", "Não tenho", "Já tive, mas me curei"]} 
                                    name="backpain"
                                    value={formData.backpain}
                                    onChange={handleChange}></Radio>
                            </Col>
                            <Col>
                                <Radio 
                                    label="Dores nas Articulações" 
                                    radios={["Tenho", "Não tenho", "Já tive, mas me curei"]} 
                                    name="jointpain"
                                    value={formData.jointpain}
                                    onChange={handleChange}></Radio>
                            </Col>
                        </Row>
                    </Card>

                    <Card className="container my-3">
                        <Row>
                            <Col>
                                <Radio 
                                    label="Dores de Cabeça" 
                                    radios={["Tenho", "Não tenho", "Já tive, mas me curei"]} 
                                    name="headache"
                                    value={formData.headache}
                                    onChange={handleChange}></Radio>
                            </Col>
                            <Col>
                                <Radio 
                                    label="Câncer" 
                                    radios={["Tenho", "Não tenho", "Já tive, mas me curei"]} 
                                    name="cancer"
                                    value={formData.cancer}
                                    onChange={handleChange}></Radio>
                            </Col>
                            <Col>
                                <Radio 
                                    label="Infecções Sexualmente Transmissíveis" 
                                    radios={["Tenho", "Não tenho", "Já tive, mas me curei"]} 
                                    name="ist"
                                    value={formData.ist}
                                    onChange={handleChange}></Radio>
                            </Col>
                        </Row>
                    </Card>
                    
                    <TextFieldOptional 
                        label="Outros"
                        name="other"
                        value={formData.other || ""}
                        onChange={handleChange}></TextFieldOptional>
                    </Card.Body>
                </Card>

                <Button variant="light" onClick={goPrevPage}>Anterior</Button>
                <Button variant="light" type="submit">Próximo</Button>
            </Form>
        </div>
    );
}

export default FormPage2;