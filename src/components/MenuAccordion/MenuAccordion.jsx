"use client";

import { manrope } from "@/app/layout";
import AccordionArrow from "@/svgs/AccordionArrow";
import React, { useState, useRef, useEffect } from "react";
import accordionMenu from "../../accordionMenu";
import { Link } from "react-scroll";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function MenuAccordion({ onLinkClick }) {
	const [openIndexes, setOpenIndexes] = useState([]);
	const [heights, setHeights] = useState({});
	const contentRefs = useRef([]);
	const items = accordionMenu;

	const toggleAccordion = (index) => {
		if (openIndexes.includes(index)) {
			setOpenIndexes(openIndexes.filter((i) => i !== index));
		} else {
			setOpenIndexes([...openIndexes, index]);
		}
	};

	useEffect(() => {
		const newHeights = items.reduce((acc, _, index) => {
			acc[index] = contentRefs.current[index]?.scrollHeight || 0;
			return acc;
		}, {});
		setHeights(newHeights);
	}, [items]);

	return (
		<div
			className={`${manrope.className} px-[20px] py-4 w-fit accordion-container h-fit`}>
			<div className="py-4">
				<h2 className="text-left text-2xl font-medium">
					Articles in this section
				</h2>
			</div>
			{items.map((item, index) => (
				<div key={index}>
					<div
						className="rounded-xl mt-4 p-4 bg-white flex flex-row items-center justify-between cursor-pointer"
						onClick={() => toggleAccordion(index)}>
						<h2 className="text-left text-xl font-medium accordion-title">
							{item.name}
						</h2>
						<div
							className={`transform transition-transform ${
								openIndexes.includes(index) ? "rotate-180" : ""
							}`}>
							<AccordionArrow />
						</div>
					</div>

					<div
						className="overflow-hidden transition-max-height duration-300 ease-in-out"
						style={{
							maxHeight: openIndexes.includes(index)
								? `${heights[index]}px`
								: "0px",
						}}
						ref={(el) => (contentRefs.current[index] = el)}>
						<ul className="mt-2 pl-4 list-disc list-outside flex flex-col gap-2">
							{item.links.map((link, linkIndex) => (
								<li
									key={linkIndex}
									onClick={() => onLinkClick(link.href)}
									className="py-1 ml-2 text-left cursor-pointer hover:text-gray-1/90 transition-colors duration-300">
									{link.text}
								</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</div>
	);
}
