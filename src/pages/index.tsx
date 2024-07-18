import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";

export default function Home() {
  return (
      <>
          <ThemeSwitcher/>
          <Button type="primary">Click Me</Button>
          <Button type="secondary">Click Me</Button>
          <Card
              header="Card Header"
              body="Card Body"
              footer="Card Footer"
          />
      </>
  );
}