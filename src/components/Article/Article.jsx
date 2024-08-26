import { manrope } from "@/app/layout";
import Image from "next/image";
import React from "react";

export default function Article({
	id,
	title,
	desc1,
	desc2,
	desc3,
	desc4,
	src1,
	src2,
	src3,
	alt1,
	alt2,
	alt3,
	imgRow,
}) {
	return (
		<section
			id={id}
			className={`${manrope.className} w-full`}>
			<h2 className="text-4xl font-bold">{title}</h2>

			{desc1 && <p className="mt-4 text-gray-1">{desc1}</p>}

			{desc2 && <p className="mt-2 text-gray-1">{desc2}</p>}

			{src1 && !imgRow ? (
				<div className="w-full mt-8">
					<Image
						width={1100}
						height={400}
						src={src1}
						alt={alt1}
					/>
				</div>
			) : imgRow ? (
				<div className="w-full mt-8 flex flex-row gap-3 lg:gap-10">
					<Image
						width={1100}
						height={400}
						src={src1}
						alt={alt1}
					/>
					<Image
						width={1100}
						height={400}
						src={src2}
						alt={alt2}
					/>
					{src3 && (
						<Image
							width={1100}
							height={400}
							src={src3}
							alt={alt3}
						/>
					)}
				</div>
			) : null}

			{desc3 && <p className="mt-4 text-gray-1">{desc3}</p>}

			{desc4 && <p className="mt-2 text-gray-1">{desc4}</p>}

			{src2 && !imgRow ? (
				<div className="w-full mt-4">
					<Image
						width={1100}
						height={400}
						src={src2}
						alt={alt2}
					/>
				</div>
			) : null}
		</section>
	);
}
