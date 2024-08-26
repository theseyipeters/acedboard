import Image from "next/image";
import React from "react";
import blur from "@/assets/footerBlur.svg";
import AcedboardLogo from "@/svgs/AcedboardLogo";
import GradientButton from "../common/GradientButton/GradientButton";
import { montserrat } from "@/app/layout";
import Link from "next/link";

const footerLinks = [
	{
		label: "Platform",
		items: [
			{ label: "Project Management", link: "/" },
			{ label: "Project Management", link: "/" },
			{ label: "Project Management", link: "/" },
			{ label: "Project Management", link: "/" },
		],
	},
	{
		label: "Platform",
		items: [
			{ label: "Project Management", link: "/" },
			{ label: "Project Management", link: "/" },
			{ label: "Project Management", link: "/" },
			{ label: "Project Management", link: "/" },
		],
	},
	{
		label: "Platform",
		items: [
			{ label: "Project Management", link: "/" },
			{ label: "Project Management", link: "/" },
			{ label: "Project Management", link: "/" },
			{ label: "Project Management", link: "/" },
		],
	},
	{
		label: "Platform",
		items: [
			{ label: "Project Management", link: "/" },
			{ label: "Project Management", link: "/" },
			{ label: "Project Management", link: "/" },
			{ label: "Project Management", link: "/" },
		],
	},
];

export default function Footer() {
	return (
		<footer className="h-[500px] bg-white w-full footer relative px-[20px] md:px-[30px] lg:px-[60px] xl:px-[90px]">
			<div className="absolute -top-[450px] left-1/2 -translate-x-1/2 w-4/5 footer-blur">
				<Image
					src={blur}
					alt="blur"
					width={1300}
					height={100}
					className="object-cover"
				/>
			</div>
			<div className="mt-[40px] w-full flex flex-row gap-4 items-center justify-between">
				<AcedboardLogo />

				<div className="flex items-center flex-row gap-4">
					<p className={`text-xl font-light`}>Ready to get started?</p>
					<GradientButton>Start for free</GradientButton>
				</div>
			</div>

			<div className="w-full flex flex-row gap-10 items-center justify-between mt-10">
				<div className="w-[35%] flex flex-col gap-5">
					<h4 className="text-2xl w-4/5">Subscribe to our newsletter</h4>

					<form className="flex w-full relative">
						<input
							placeholder="Email address"
							type="email"
							className="border-b rounded-br-xl h-[55px] w-full px-3 placeholder:text-gray-1/60 placeholder:text-sm"
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
				<div className="w-full border">
					<div>
						<h2 className="text-gradient">Platform</h2>

						<div className="flex flex-col gap-5 mt-5">
							<Link
								className="text-gradient"
								href={"/"}>
								Project Management
							</Link>
							<Link href={"/"}>Project Management</Link>
							<Link href={"/"}>Project Management</Link>
							<Link href={"/"}>Project Management</Link>
							<Link href={"/"}>Project Management</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
