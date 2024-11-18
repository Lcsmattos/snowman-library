import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LoginBox } from "../../components/LoginBox";
import { BodyContainer } from "./styles";

export function Login() {
  return (
    <>
      <Header />
      <BodyContainer>
        <LoginBox />
      </BodyContainer>
      <Footer />
    </>
  );
}
