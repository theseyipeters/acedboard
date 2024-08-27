"use client";

import { useRef, useState } from "react";
import BreadCrumb from "@/components/common/Breadcrumb/BreadCrumb";
import Navbar from "@/components/Navbar/Navbar";
import { manrope, montserrat } from "./layout";
import SearchInput from "@/components/common/SearchInput/SearchInput";
import MenuAccordion from "@/components/MenuAccordion/MenuAccordion";
import Article from "@/components/Article/Article";
import articles from "../articles.json";
import { scrollToElement } from "@/utils/helpers";
import Footer from "@/components/Footer/Footer";
import MenuIcon from "@/svgs/MenuIcon";

export default function Home() {
	const containerRef = useRef(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredArticles, setFilteredArticles] = useState(articles);

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

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleSearchInput = (e) => {
		const query = e.target.value.toLowerCase();
		setSearchQuery(query);
		setFilteredArticles(
			articles.filter((article) => article.title.toLowerCase().includes(query))
		);
	};

	return (
		<div className="bg-black h-[1200px]">
			<div className="w-full fixed top-0 bg-white z-50">
				<Navbar />
			</div>

			{isMenuOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 z-[1000] flex">
					<div className="bg-white w-[350px] h-full p-4">
						<MenuAccordion onLinkClick={handleLinkClick} />
					</div>
					<div
						className="flex-1"
						onClick={() => setIsMenuOpen(false)}></div>
				</div>
			)}

			<div className="mt-[100px] relative bg-white h-full w-full">
				<div className="fixed w-full mt-4">
					<div className="absolute top-0 left-[20px] md:left-[50px] lg:left-[90px] ">
						<BreadCrumb />
					</div>
				</div>

				<div className={`flex fixed w-full ${montserrat.style}`}>
					<div className="absolute top-0 w-full mt-[80px] flex flex-col gap-4 lg:flex-row items-start lg:items-center justify-between px-[20px] md:px-[30px] lg:px-[60px] xl:px-[90px]">
						<div className="w-fit">
							<h1 className="text-2xl md:text-3xl lg:text-4xl capitalize font-semibold">
								How can we <span className="text-gradient">help you</span>{" "}
								today?
							</h1>
							<p className="text-sm md:text-lg text-gray-500 mt-4">
								Lorem Ipsum is simply dummy text of the printing
							</p>
						</div>

						<div className="hidden md:flex w-full md:w-fit">
							<SearchInput
								placeholder={"Search article by title"}
								value={searchQuery}
								onChange={handleSearchInput}
							/>
						</div>
						<div className="md:hidden mt-4 md:mt-10 flex flex-row items-center gap-3">
							<div
								onClick={toggleMenu}
								className="h-6 w-6">
								<MenuIcon className="text-gray-700" />
							</div>
							<p>Articles in this section</p>
						</div>
					</div>
				</div>

				<div className="bg-white overflow-y-scroll fixed top-[400px] md:top-[420px] lg:top-[350px] xl:top-[300px] bottom-0 w-full flex flex-col">
					<div className="pb-[40px]">
						<div className=" flex flex-row gap-[50px] px-[20px] md:px-[30px] lg:px-[60px] xl:px-[90px]">
							<div className="hidden md:flex flex-[2] lg:flex-[1.5] xl:flex-[1.5] w-full h-fit pt-[20px] py-[50px]">
								<MenuAccordion onLinkClick={handleLinkClick} />
							</div>

							<div
								ref={containerRef}
								className="flex-[3] lg:flex-[3.5] flex flex-col gap-20 overflow-y-scroll  pt-[20px] py-[50px] h-[1200px]">
								{filteredArticles.map((article, index) => (
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
										subitems={article.subitems}
									/>
								))}
							</div>
						</div>
					</div>
					<div className="w-full z-[2000] relative">
						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
}
