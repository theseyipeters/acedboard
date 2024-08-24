import React from "react";
import GradientButton from "../GradientButton/GradientButton";

export default function SearchInput({ placeholder }) {
	return (
		<div className="w-[500px] search-input p-2">
			<div className="rounded-[14px] bg-white p-1 relative h-[60px]">
				<input
					className="w-4/5 h-full px-5 placeholder:text-gray-600 focus:outline-none"
					placeholder={placeholder}
				/>

				<div className="absolute right-1 top-1/2 -translate-y-1/2">
					<GradientButton>Search</GradientButton>
				</div>
			</div>
		</div>
	);
}
