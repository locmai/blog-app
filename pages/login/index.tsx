import MasterLayout from "@components/Layout";
import LoginForm from "@components/LoginForm";
import { NextPage } from "next";

const LoginPage: NextPage = () => {
  return (
    <MasterLayout title="About" page="about">
      <LoginForm />
    </MasterLayout>
  );
};

export default LoginPage;
