import { useState } from "react";
import { montserrat } from "@/app/layout";
import AcedboardLogo from "@/svgs/AcedboardLogo";
import ArrowDown from "@/svgs/ArrowDown";
import Link from "next/link";
import React from "react";
import GradientButton from "../common/GradientButton/GradientButton";
import MenuIcon from "@/svgs/MenuIcon";
import CloseIcon from "@/svgs/CloseIcon";

const navItems = [
	{ label: "Features", link: "/features", hasDropdown: true },
	{ label: "Solution", link: "/solution", hasDropdown: true },
	{ label: "Case Study", link: "/case-study", hasDropdown: false },
	{ label: "Resources", link: "/resources", hasDropdown: true },
	{ label: "Pricing", link: "/pricing", hasDropdown: false },
];

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav
			className={` ${montserrat.className} h-[100px] bg-white fixed w-full flex justify-center items-center px-[20px] md:px-[30px] lg:px-[60px] xl:px-[90px]`}>
			<div className="w-full flex items-center justify-between">
				<AcedboardLogo />

				<ul className="hidden font-light lg:flex items-center lg:gap-4 xl:gap-6">
					{navItems.map((item, index) => (
						<li
							className="flex items-center gap-[6px]"
							key={index}>
							<Link
								className="text-base lg:text-sm"
								href={item.link}>
								{item.label}
							</Link>
							{item.hasDropdown && <ArrowDown />}
						</li>
					))}
				</ul>

				<div className="hidden  lg:flex flex-row items-center gap-6">
					<Link href="/sign-in">Sign in</Link>

					<GradientButton>Start for free</GradientButton>
				</div>

				<div
					className="h-6 w-6 block lg:hidden"
					onClick={toggleMenu}>
					<MenuIcon />
				</div>
			</div>

			{isMenuOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col items-end">
					<div className="w-3/4 max-w-xs h-full bg-white shadow-lg p-6">
						<div
							onClick={toggleMenu}
							className="flex ml-auto mb-4 w-fit">
							<CloseIcon />
						</div>
						<ul className="flex flex-col gap-4">
							{navItems.map((item, index) => (
								<li key={index}>
									<Link
										className="text-ase"
										href={item.link}
										onClick={toggleMenu}>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
						<div className="flex flex-col items-center w-full mt-10 gap-4">
							<Link
								className="text-ase"
								href="/sign-in"
								onClick={toggleMenu}>
								Sign in
							</Link>
							<div className="w-full">
								<GradientButton>Start for free</GradientButton>
							</div>
						</div>
						<div className="fixed bottom-5">
							<AcedboardLogo />
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
