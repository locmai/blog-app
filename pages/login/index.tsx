import MasterLayout from '@components/Layout'
import LoginForm from '@components/LoginForm'
function LoginPage() {
  return <MasterLayout title="About" page="about">
    <LoginForm></LoginForm>
  </MasterLayout>
} 

export default LoginPage