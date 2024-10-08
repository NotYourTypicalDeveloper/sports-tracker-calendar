import Container from "../../components/Container";
import DashboardScreen from "../../components/DashboardScreen";
import LoginScreen from "../../components/LoginScreen";

export default function DashboardPage() {
  const isAuthenticated = true;
  const screenToShow = isAuthenticated ? <DashboardScreen /> : <LoginScreen />;

  return <Container>{screenToShow}</Container>;
}
