import React from "react";

export default function GradientButton({ onClick, children }) {
	return (
		<button
			className="gradient-button flex items-center justify-center py-[14px] px-5 text-white"
			onClick={onClick}>
			<span className="">{children}</span>
		</button>
	);
}
