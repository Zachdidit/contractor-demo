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
import { useIsVisible } from "./hooks/useIsVisible";
import { title } from "process";

export default function Home() {
  const gridRef = React.useRef<HTMLDivElement>(null);
  const gridTileRefs = React.useRef<HTMLDivElement[]>([]);
  const isVisible = useIsVisible(gridRef);
  const gridTileData = [
    {
      image: "/images/icons/driveway.png",
      alt: "Concrete Driveways",
      title: "Driveway Installations",
      description:
        "Let us create a durable and long-lasting driveway for your commercial, residential, or industrial property. We use high-quality materials designed to withstand the test of time.",
    },
    {
      image: "/images/icons/patio.png",
      alt: "Concrete Patios",
      title: "Patios and Walkways",
      description:
        "Looking to add a patio to your property? Contact us today! We also install durable concrete walkways. Get your FREE estimate now!",
    },
    {
      image: "/images/icons/foundation.png",
      alt: "Concrete Foundations",
      title: "Foundations and Slabs",
      description:
        "Get expert concrete services, including new slabs, foundation walls, and more.",
    },
    {
      image: "/images/icons/publicwork.png",
      alt: "Public Works",
      title: "Public Works",
      description:
        "Choose us for reliable public works concrete services! We handle city sidewalks, gutters, driveway approaches, and permit requests. Contact us today!",
    },
    {
      image: "/images/icons/wheelchair.png",
      alt: "Wheelchair Ramps",
      title: "Wheelchair Ramps",
      description:
        "Reliable and effective handicap ramp solutions for your home, office, or business.",
    },
    {
      image: "/images/icons/industrial.png",
      alt: "Industrial Services",
      title: "Industrial Services",
      description:
        "Trust us for your next industrial concrete installation project. We specialize in equipment pads, warehouse floors, flowlines, and parking lots, delivering durable and high-quality results.",
    },
  ];

  React.useEffect(() => {
    if (isVisible) {
      gridTileRefs.current?.forEach((gridTileRef, i) => {
        if (i % 3 == 0) {
          gridTileRef.classList.add("fadeInLeft");
        } else if (i % 3 == 2) {
          gridTileRef.classList.add("fadeInRight");
        } else if (i == 1) {
          gridTileRef.classList.add("fadeInDown");
        } else if (i == 4) {
          gridTileRef.classList.add("fadeInUp");
        }

        gridTileRef.classList.remove("not-visible");
      });
    }
  });

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
        gap="s"
        className="service-tiles align-center"
      >
        <div
          style={{ backgroundImage: "url('/images/backgrounds/BG1.jpg')" }}
          className="section-background background-offset"
        ></div>

        {gridTileData
          .reduce<React.JSX.Element[][]>((rows, tile, i) => {
            if (i % 3 === 0) {
              // Start a new row every 3 items
              rows.push([]);
            }

            // Push current tile into the latest row array
            rows[rows.length - 1].push(
              <Column
                key={i}
                radius="l"
                border="neutral-medium"
                borderStyle="solid"
                className="justify-space-between"
                fillWidth
                padding="s"
                ref={(element) => {
                  if (element) gridTileRefs.current[i] = element;
                }}
              >
                <Row gap="s" className="service-tile">
                  <Column className="service-tile-img">
                    <img src={tile.image} alt={tile.alt} />
                  </Column>
                  <Column gap="s">
                    <Heading onBackground="info-strong" className="banner-text">
                      {tile.title}
                    </Heading>
                    <Text>{tile.description}</Text>
                  </Column>
                </Row>
                <Column className="service-tile-button">
                  <Button className="banner-button" size="l">
                    Learn More
                  </Button>
                </Column>
              </Column>,
            );

            return rows;
          }, [])
          .map((row, index) => (
            <Row key={`row-${index}`} className="service-tile-row" gap="s">
              {row}
            </Row>
          ))}
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
