import { montserrat } from "@/app/layout";
import AcedboardLogo from "@/svgs/AcedboardLogo";
import ArrowDown from "@/svgs/ArrowDown";
import Link from "next/link";
import React from "react";
import GradientButton from "../common/GradientButton/GradientButton";

const navItems = [
	{ label: "Features", link: "/features", hasDropdown: true },
	{ label: "Solution", link: "/solution", hasDropdown: true },
	{ label: "Case study", link: "/case-study", hasDropdown: false },
	{ label: "Resources", link: "/resources", hasDropdown: true },
	{ label: "Pricing", link: "/pricing", hasDropdown: false },
];

export default function Navbar() {
	return (
		<nav
			className={` ${montserrat.className} h-[100px] border fixed w-full flex justify-center items-center px-[20px] md:px-[30px] lg:px-[60px] xl:px-[90px]`}>
			<div className="w-full flex items-center justify-between">
				<AcedboardLogo />

				<ul className="font-light flex items-center gap-6">
					{navItems.map((item, index) => (
						<li
							className="flex items-center gap-[6px]"
							key={index}>
							<Link href={item.link}>{item.label}</Link>
							{item.hasDropdown && <ArrowDown />}
						</li>
					))}
				</ul>

				<div className="flex flex-row items-center gap-6">
					<Link href="/sign-in">Sign in</Link>

					<GradientButton>Start for free</GradientButton>
				</div>
			</div>
		</nav>
	);
}
