"use client";

import React from "react";
import {
  Heading,
  Text,
  Flex,
  Button,
  Grid,
  Icon,
  Background,
  Avatar,
  Column,
  Row,
} from "@/once-ui/components";
import Link from "next/link";

export default function Home() {
  return (
    <Column
      position="relative"
      as="section"
      overflow="hidden"
      fillWidth
      minHeight="0"
    >
      <Column as="main" fillWidth fillHeight padding="l" gap="l">
        {" "}
        Hello World
      </Column>
    </Column>
  );
}
