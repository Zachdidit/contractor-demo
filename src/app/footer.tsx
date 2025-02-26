import { Text, Flex, Button, Column, Row } from "@/once-ui/components";

export default function Footer() {
  return (
    <Row as="footer" position="relative" paddingX="l" paddingY="m">
      <Text variant="body-default-s" onBackground="neutral-weak" align="center">
        © 2024 Zachary White
      </Text>
      <Row>
        <Button
          href="https://github.com/Zachdidit"
          prefixIcon="github"
          size="s"
          variant="tertiary"
        >
          GitHub
        </Button>
        <Button
          href="https://www.linkedin.com/in/zach-white-7a96106/"
          prefixIcon="linkedin"
          size="s"
          variant="tertiary"
        >
          Linkedin
        </Button>
      </Row>
    </Row>
  );
}
