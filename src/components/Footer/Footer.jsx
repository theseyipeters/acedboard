import Image from "next/image";
import React from "react";
import blur from "@/assets/footerBlur.svg";
import AcedboardLogo from "@/svgs/AcedboardLogo";
import GradientButton from "../common/GradientButton/GradientButton";
import Facebook from "@/svgs/Facebook";
import LinkedIn from "@/svgs/LinkedIn";
import Youtube from "@/svgs/Youtube";
import X from "@/svgs/X";
import { montserrat } from "@/app/layout";
import Link from "next/link";

const footerLinks = [
	{
		label: "Platform",
		items: [
			{ label: "Project Management", link: "/" },
			{ label: "Automation", link: "/" },
			{ label: "Integration", link: "/" },
			{ label: "Security", link: "/" },
			{ label: "Proconomics", link: "/" },
		],
	},
	{
		label: "Features",
		items: [
			{ label: "List", link: "/" },
			{ label: "Board", link: "/" },
			{ label: "Workload", link: "/" },
			{ label: "Calendar", link: "/" },
			{ label: "Teams", link: "/" },
			{ label: "Files", link: "/" },
		],
	},
	{
		label: "Company",
		items: [
			{ label: "About us", link: "/" },
			{ label: "Brand", link: "/" },
			{ label: "Blogs", link: "/" },
			{ label: "Careers", link: "/" },
			{ label: "Events", link: "/" },
			{ label: "Contact Us", link: "/" },
		],
	},
	{
		label: "Resources",
		items: [
			{ label: "Guides", link: "/" },
			{ label: "FAQs", link: "/" },
			{ label: "Video Library", link: "/" },
			{ label: "24/7 Support", link: "/" },
			{ label: "Pricing", link: "/" },
			{ label: "Community", link: "/" },
		],
	},
];

const socials = [
	{ icon: Facebook, link: "/" },
	{ icon: Youtube, link: "/" },
	{ icon: LinkedIn, link: "/" },
	{ icon: X, link: "/" },
];

export default function Footer() {
	return (
		<footer className="h-fit pb-[80px] bg-white w-full footer border px-[20px] md:px-[30px] lg:px-[60px] xl:px-[90px]">
			<div className="absolute top-[0px] left-1/2 -translate-x-1/2 w-4/5 footer-blur">
				<Image
					src={blur}
					alt="blur"
					width={1300}
					height={100}
					className="object-cover"
				/>
			</div>
			<div className="mt-[60px] w-full flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
				<AcedboardLogo />

				<div className="w-full md:w-fit flex flex-col items-start md:items-center mt-3 md:mt-0 justify-between md:flex-row gap-4">
					<p className={`text-xl font-light`}>Ready to get started?</p>
					<GradientButton>Start for free</GradientButton>
				</div>
			</div>

			<div className="w-full flex flex-col-reverse lg:flex-row gap-20 items-center justify-between mt-10">
				<div className="w-full lg:w-[35%] flex flex-col gap-5">
					<h4 className="text-2xl w-full lg:w-[75%]">
						Subscribe to our newsletter
					</h4>

					<form className="flex w-full relative">
						<input
							placeholder="Email address"
							type="email"
							className="border-b bg-transparent focus:outline-none rounded-br-xl h-[55px] w-full px-3 placeholder:text-gray-1/60 placeholder:text-sm"
						/>

						<div className="absolute right-0 translate-y-0">
							<GradientButton className="">
								<svg
									width="31"
									height="27"
									viewBox="0 0 31 27"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M11.4355 18.5087L17.0345 13.4142L11.4355 8.31978L13.1635 6.74756L20.4903 13.4142L13.1635 20.0809L11.4355 18.5087Z"
										fill="white"
									/>
								</svg>
							</GradientButton>
						</div>
					</form>
				</div>
				<div className="w-full lg:w-[65%]  grid grid-cols-2 md:grid-cols-4 gap-10 items-start justify-between">
					{footerLinks.map((item, index) => (
						<div
							key={index}
							className="">
							<h2 className="text-gradient">{item.label}</h2>

							<div className="flex flex-col gap-5 mt-5">
								{item.items.map((item, index) => (
									<Link
										key={index}
										className="font-light"
										href={"/"}>
										{item.label}
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="mt-[62px] w-full flex flex-col lg:flex-row gap-10 items-center justify-between">
				<div className="font-light flex flex-col md:flex-row gap-[50px] items-center">
					<p>All Rights Reserved © acedboard 2024</p>
					<div className="flex flex-row gap-2">
						<p>Terms of Use</p>
						<p>|</p>
						<p>Privacy Policy</p>
					</div>
				</div>

				<div className="flex flex-row lg: gap-8 xl:gap-10">
					{socials.map((item, index) => (
						<Link
							key={index}
							href={item.link}>
							<item.icon />
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
}
