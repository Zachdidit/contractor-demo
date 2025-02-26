import {
  Text,
  Flex,
  Grid,
  Icon,
  Row,
  Column,
  Background,
} from "@/once-ui/components";
import Link from "next/link";

export default function Navbar() {
  const links = [
    {
      href: "/",
      title: "Home",
      description: "",
    },
    {
      href: "/services",
      title: "Services",
      description: "Let's make something great",
    },
    {
      href: "/gallery",
      title: "Gallery",
      description: "",
    },
    {
      href: "/contact",
      title: "Contact",
      description: "",
    },
  ];
  const gridColumns: Number = links.length;

  return (
    <Row
      position="fixed"
      as="nav"
      overflow="hidden"
      fillWidth
      center={true}
      flex={1}
      className="nav z-index-5"
    >
      <Grid
        radius="l"
        border="neutral-medium"
        borderStyle="solid"
        columns="4"
        paddingLeft="2"
        align="center"
        tabletColumns="1"
        mobileColumns="1"
        maxWidth="xl"
        className="background-white"
      >
        {links.map((link) => (
          <Link
            target={link.title == "Resume" ? "_blank" : ""}
            style={{ padding: "var(--responsive-space-l)" }}
            key={link.href}
            href={link.href}
          >
            <Text variant="body-strong-m" onBackground="neutral-strong">
              {link.title}
            </Text>
          </Link>
        ))}
      </Grid>
    </Row>
  );
}
