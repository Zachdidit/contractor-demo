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
  SmartImage,
  Column,
  Row,
} from "@/once-ui/components";
import Link from "next/link";
import { url } from "inspector";
import { DoubleTile } from "./components";

export default function Home() {
  const gridRef = React.useRef<HTMLDivElement>(null);
  return (
    <Column
      position="relative"
      as="main"
      overflow="hidden"
      fillWidth
      minHeight="0"
    >
      <Row
        position="relative"
        as="section"
        overflow="hidden"
        fillWidth
        minHeight="l"
        className="banner"
        data-theme="dark"
      >
        <div className="background-overlay"></div>
        <Column as="div" paddingLeft="xl">
          <Heading onBackground="info-strong" className="banner-text">
            Concrete Contractors
          </Heading>
          <Text onBackground="info-strong" className="banner-text">
            <ul>
              <li>Licensed & Insured</li>
              <li>In Business Since 2005</li>
            </ul>
          </Text>
          <Button className="banner-button" size="l">
            Get Started
          </Button>
        </Column>
      </Row>
      <Row
        position="relative"
        as="section"
        overflow="hidden"
        fillWidth
        minHeight="0"
        padding="l"
        gap="l"
      >
        <SmartImage
          src="/images/concpour.png"
          alt="Concrete Testimonials"
          aspectRatio="16/9"
          radius="l"
          height={25}
          width={25}
          objectFit="contain"
        />
        <Heading onBackground="info-strong" className="banner-text">
          Testimonials
        </Heading>
      </Row>
      <Row
        position="relative"
        as="section"
        overflow="hidden"
        fillWidth
        minHeight="0"
        padding="l"
        className="double-tile justify-center"
      >
        <div className="section-background"></div>
        <DoubleTile
          isAnimated
          firstTileContent={
            <>
              <SmartImage
                src="/images/walkway.jpg"
                alt="Walkway"
                aspectRatio="8/9"
                radius="l"
                objectFit="fill"
              />
            </>
          }
          secondTileContent={
            <>
              <Heading onBackground="info-strong" className="banner-text">
                About Us
              </Heading>
              <Text>
                Groh Contractors provides top-quality concrete services for
                residential, commercial, and industrial properties. As a local,
                family-owned business with over 20 years of experience, we take
                pride in our skilled, licensed team. Contact us today for a
                estimate!
                <div className="divider">
                  <span></span>
                </div>
                <ul>
                  <li>Quality</li>
                  <li>Reliability</li>
                  <li>100% Satisfaction</li>
                </ul>
              </Text>
            </>
          }
        />
      </Row>
      <Column
        position="relative"
        as="section"
        overflow="hidden"
        fillWidth
        minHeight="0"
        padding="l"
        className="service-tiles"
      >
        <div
          style={{ backgroundImage: "url('/images/backgrounds/BG1.jpg')" }}
          className="section-background background-offset"
        ></div>
        <Grid columns={3} ref={gridRef} fillWidth gap="m" z-index="1">
          <Column
            radius="l"
            border="neutral-medium"
            borderStyle="solid"
            className="fadeInLeft"
          >
            <Row gap="s">
              <SmartImage
                src="/images/icons/driveway.svg"
                alt="Concrete Driveways"
                aspectRatio="16/9"
                radius="l"
                objectFit="fill"
                width={20}
              />
              <Column gap="s">
                <Heading onBackground="info-strong" className="banner-text">
                  Driveway Installations
                </Heading>
                <Text>
                  Let us create a durable and long-lasting driveway for your
                  commercial, residential, or industrial property. We use
                  high-quality materials designed to withstand the test of time.
                </Text>
              </Column>
            </Row>
            <Column marginTop="l" className="service-tile">
              <Button className="banner-button" size="l">
                Learn More
              </Button>
            </Column>
          </Column>
          <Column radius="l" border="neutral-medium" borderStyle="solid">
            <Row gap="s">
              <SmartImage
                src="/images/icons/patios.svg"
                alt="Concrete Patios"
                aspectRatio="16/9"
                radius="l"
                objectFit="fill"
                width={20}
              />
              <Column gap="s">
                <Heading onBackground="info-strong" className="banner-text">
                  Patios and Walkways
                </Heading>
                <Text>
                  Looking to add a patio to your property? Contact us today! We
                  also install durable concrete walkways. Get your FREE estimate
                  now!
                </Text>
              </Column>
            </Row>
            <Column marginTop="l" className="service-tile">
              <Button className="banner-button" size="l">
                Learn More
              </Button>
            </Column>
          </Column>
          <Column radius="l" border="neutral-medium" borderStyle="solid">
            <Row gap="s">
              <SmartImage
                src="/images/icons/foundations.svg"
                alt="Concrete Foundations"
                aspectRatio="16/9"
                radius="l"
                objectFit="fill"
                width={20}
              />
              <Column gap="s">
                <Heading onBackground="info-strong" className="banner-text">
                  Foundations and Slabs
                </Heading>
                <Text>
                  Get expert concrete services, including new slabs, foundation
                  walls, and more.
                </Text>
              </Column>
            </Row>
            <Column marginTop="l" className="service-tile">
              <Button className="banner-button" size="l">
                Learn More
              </Button>
            </Column>
          </Column>
          <Column radius="l" border="neutral-medium" borderStyle="solid">
            <Row gap="s">
              <SmartImage
                src="/images/icons/publicworks.svg"
                alt="Public Works"
                aspectRatio="16/9"
                radius="l"
                objectFit="fill"
                width={20}
              />
              <Column gap="s">
                <Heading onBackground="info-strong" className="banner-text">
                  Public Works
                </Heading>
                <Text>
                  Choose us for reliable public works concrete services! We
                  handle city sidewalks, gutters, driveway approaches, and
                  permit requests. Contact us today!
                </Text>
              </Column>
            </Row>
            <Column marginTop="l" className="service-tile">
              <Button className="banner-button" size="l">
                Learn More
              </Button>
            </Column>
          </Column>
          <Column radius="l" border="neutral-medium" borderStyle="solid">
            <Row gap="s">
              <SmartImage
                src="/images/icons/wheelchair.svg"
                alt="Wheelchair Ramps"
                aspectRatio="16/9"
                radius="l"
                objectFit="fill"
                width={20}
              />
              <Column gap="s">
                <Heading onBackground="info-strong" className="banner-text">
                  Wheelchair Ramps
                </Heading>
                <Text>
                  Reliable and effective handicap ramp solutions for your home,
                  office, or business.
                </Text>
              </Column>
            </Row>
            <Column marginTop="l" className="service-tile">
              <Button className="banner-button" size="l">
                Learn More
              </Button>
            </Column>
          </Column>
          <Column radius="l" border="neutral-medium" borderStyle="solid">
            <Row gap="s">
              <SmartImage
                src="/images/icons/industrial.svg"
                alt="Industrial Services"
                aspectRatio="16/9"
                radius="l"
                objectFit="fill"
                width={20}
              />
              <Column gap="s">
                <Heading onBackground="info-strong" className="banner-text">
                  Industrial Services
                </Heading>
                <Text>
                  Trust us for your next industrial concrete installation
                  project. We specialize in equipment pads, warehouse floors,
                  flowlines, and parking lots, delivering durable and
                  high-quality results.
                </Text>
              </Column>
            </Row>
            <Column marginTop="l" className="service-tile">
              <Button className="banner-button" size="l">
                Learn More
              </Button>
            </Column>
          </Column>
        </Grid>
      </Column>
      <Row
        position="relative"
        as="section"
        overflow="hidden"
        fillWidth
        minHeight="0"
      >
        <Text>Gallery</Text>
      </Row>
    </Column>
  );
}
