"use client";

import BreadCrumb from "@/components/common/Breadcrumb/BreadCrumb";
import Navbar from "@/components/Navbar/Navbar";
import { manrope } from "./layout";
import SearchInput from "@/components/common/SearchInput/SearchInput";
import MenuAccordion from "@/components/MenuAccordion/MenuAccordion";
import Article from "@/components/Article/Article";
import articles from "../articles.json";
import { useRef } from "react";
import { scrollToElement } from "@/utils/helpers";

export default function Home() {
	const containerRef = useRef(null);

	const handleLinkClick = (id) => {
		const element = document.getElementById(id);
		if (element && containerRef.current) {
			scrollToElement(
				containerRef,
				containerRef.current.scrollTop,
				element.offsetTop,
				1200
			);
		}
	};
	return (
		<>
			{/* Navbar */}
			<div className="w-full fixed top-0">
				<Navbar />
			</div>

			<div
				className={`w-full fixed top-[130px] px-[20px] md:px-[30px] lg:px-[60px] xl:px-[90px] ${manrope.className}`}>
				<div>
					<BreadCrumb />
				</div>

				<div className="mt-[20px] flex items-center w-full justify-between">
					<div className="w-fit">
						<h1 className="text-4xl capitalize font-semibold">
							How can we help you today?
						</h1>
						<p className="text-lg text-gray-500 mt-4">
							Lorem Ipsum is simply dummy text of the printing
						</p>
					</div>

					<div className="flex w-fit">
						<SearchInput placeholder={"Find in templates"} />
					</div>
				</div>
			</div>

			{/* Scrollable MenuAccordion */}
			<div className="fixed top-[330px] bottom-0 w-full  px-[20px] md:px-[30px] lg:px-[60px] xl:px-[90px] flex flex-row gap-[100px]">
				<div className="flex-[1] w-[380px] overflow-y-scroll pt-[20px] py-[300px]">
					<MenuAccordion onLinkClick={handleLinkClick} />
				</div>

				<div
					ref={containerRef}
					className="flex-[3] flex flex-col gap-20 overflow-y-scroll  pt-[20px] py-[300px]">
					{articles.map((article, index) => (
						<Article
							key={index}
							id={article.id}
							title={article.title}
							desc1={article.desc1}
							desc2={article.desc2}
							desc3={article.desc3}
							desc4={article.desc4}
							imgRow={article.imgRow}
							src1={article.src1}
							src2={article.src2}
							src3={article.src3}
							alt1={article.alt1}
							alt2={article.alt2}
							alt3={article.alt3}
						/>
					))}
				</div>
			</div>
		</>
	);
}
