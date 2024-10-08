import { manrope } from "@/app/layout";
import Link from "next/link";
import React from "react";

export default function BreadCrumb() {
	return (
		<div className={`${manrope.className} flex gap-[8px]`}>
			<Link
				className="text-lg text-gray-1/70"
				href={"/"}>
				Home
			</Link>
			<span className="text-lg">/</span>
			<Link
				className="text-maroon-1 text-lg font-medium"
				href={"/"}>
				Help Centre
			</Link>
		</div>
	);
}
