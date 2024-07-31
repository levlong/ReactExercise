import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import { FaApple, FaGoogle, FaFacebook, FaArrowRight } from "react-icons/fa";

export default function E1() {
    return (
        <Container>
            <Button text="Get started" icon={FaArrowRight} iconPosition="right" styleClass="get-started"/>
            <Button text="Continue with Apple" icon={FaApple} styleClass="black-white"/>
            <Button text="Continue with Google" icon={FaGoogle} styleClass="white-black"/>
            <Button text="Continue with Facebook" icon={FaFacebook} styleClass="white-black"/>
        </Container>
    );
}