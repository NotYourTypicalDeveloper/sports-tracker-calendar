import Calendar from "@/components/Calendar";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
export default function Home() {
  return (
    <div>
      <Hero />
      <Container>
        <Calendar demo />
      </Container>
    </div>
  );
}
