"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";
import { Flex, Heading, Text, Row, Column, SmartImage } from "@/once-ui/components";
import styles from "./DoubleTile.module.scss";

import { useIsVisible } from "../hooks/useIsVisible";
import classNames from "classnames";

interface DoubleTileProps extends React.ComponentProps<typeof Flex> {
	img?: Object;
	firstTileContent?: ReactNode;
	secondTileContent?: ReactNode;
	isAnimated?: boolean;
	className?: string;
	style?: React.CSSProperties;
  }


const DoubleTile : React.FC<DoubleTileProps> =({
	img,
	firstTileContent,
	secondTileContent,
	isAnimated,
	className,
	style,
	...rest
  }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const imgTileRef = useRef<HTMLDivElement>(null);
	const txtTileRef = useRef<HTMLDivElement>(null);
	const isVisible = useIsVisible(containerRef);
	useEffect(() => {
		if (isAnimated && isVisible){
			txtTileRef.current?.classList.add('fadeInUp');
			txtTileRef.current?.classList.remove('not-visible');
			imgTileRef.current?.classList.add('fadeInRight');
			imgTileRef.current?.classList.remove('not-visible');
		}

	  });

    return (
		<Row className={className} style={style} ref={containerRef}>
			<Column
			ref={imgTileRef}

			className={isAnimated?"not-visible": ""}
			width={30}>
				{firstTileContent}
			</Column>

			<Column
			ref={txtTileRef}
			background="accent-weak"
			className={isAnimated?classNames("not-visible",styles.tiletext) : styles.tiletext}
			marginTop="m"
			radius="xl"
			padding="l"
			border="neutral-medium"
			borderWidth={2}
        	borderStyle="solid"
			width={30}>

				{secondTileContent}
			</Column>
	  </Row>
    );
  }


export { DoubleTile };
