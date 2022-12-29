import React, { useState } from "react";
import Link from "next/link";
import { NavItem } from "../";
import { Dispatch, SetStateAction } from "react";

interface NavBarProps {
	hasWhiteText?: boolean;
	searchIconIsPresent?: boolean;
	setExpand: Dispatch<SetStateAction<boolean>>;
	expand: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({ hasWhiteText, searchIconIsPresent, setExpand, expand }) => {
	const [isTransparent, setIsTransparent] = useState(true);

	const changeTransparency = () => {
		if (window.scrollY >= 40) {
			setIsTransparent(false);
		} else {
			setIsTransparent(true);
		}
	};

	if (typeof window !== "undefined") {
		window.addEventListener("scroll", changeTransparency);
	}

	return (
		<nav
			style={{ backgroundColor: isTransparent ? "transparent" : "white" }}
			className="border-gray-200 px-2 sm:px-4 py-2.5 z-30 fixed top-0 w-full navBar"
		>
			<div className="container flex flex-wrap justify-between items-center mx-auto ">
				{!hasWhiteText && (
					<div className="flex items-center">
						<Link href="/">
							<img
								src="/Images/logo.svg"
								className="-ml-[15px] h-32 w-32 -my-10"
								alt="Adetunji's Adeyinka's Logo"
							/>
						</Link>
					</div>
				)}
				{hasWhiteText && !isTransparent && (
					<div className="flex items-center">
						<Link href="/">
							<img
								src="/Images/logo.svg"
								className="-ml-[15px] h-32 w-32 -my-10"
								alt="Adetunji's Adeyinka's Logo"
							/>
						</Link>
					</div>
				)}
				{hasWhiteText && isTransparent && (
					<div className="flex items-center h-12">
						<Link href="/">
							<img
								src="/Images/whiteEccLogo.svg"
								className="ml-3 h-16 w-16"
								alt="Adetunji's Adeyinka's Logo"
							/>
						</Link>
					</div>
				)}
				{/* Created a list a seperate list for the mobile components of the nabar: the hamburger icon and the File a complaint button */}
				<ul className="flex flex-row  -my-10 items-center">
					<li>
						<button
							style={{
								backgroundColor: hasWhiteText && isTransparent ? "white" : "#0B63C5",
							}}
							className="bg-eccblue lg:hidden sm:block hidden   rounded-[4.93px] font-semibold text-white w-29 h-9 px-2  text-center"
						>
							<span
								className=" text-sm font-[600] text-center "
								style={{
									color: hasWhiteText && isTransparent ? "#0B63C5" : "white",
								}}
							>
								File a complaint
							</span>
						</button>
					</li>
					<li>
						<button
							onClick={() => {
								setExpand(!expand);
							}}
							data-collapse-toggle="mobile-menu"
							type="button"
							className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-grey-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							aria-controls="mobile-menu"
							aria-expanded="false"
						>
							<img
								src="/Images/hamburgerNew.png"
								alt=""
								className=" h-3 w-5"
							/>
						</button>
					</li>
				</ul>
				<div className="hidden w-full  lg:block  md:w-auto ">
					<ul className="flex justify-items-center items-center   md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
						<NavItem
							title="Complaints"
							href="/complaints"
							isTransparent={isTransparent}
							hasWhiteText={hasWhiteText ? hasWhiteText : false}
						/>
						<NavItem
							title="Scam Statistics"
							href="/statistics"
							isTransparent={isTransparent}
							hasWhiteText={hasWhiteText ? hasWhiteText : false}
						/>
						<NavItem
							title="Write a complaint letter"
							href="/write-complaint"
							isTransparent={isTransparent}
							hasWhiteText={hasWhiteText ? hasWhiteText : false}
						/>
						<NavItem
							title="FAQS"
							href="/faq"
							isTransparent={isTransparent}
							hasWhiteText={hasWhiteText ? hasWhiteText : false}
						/>

						<div className="flex flex-row ml-12">
							{/* <NavItem
								title="Login / SignUp"
								href="/login"
								isTransparent={isTransparent}
								hasWhiteText={hasWhiteText ? hasWhiteText : false}
							/> */}
							<div className="flex flex-row items-start ml-4 p-1 gap-4">
								<div>
									<button className="bg-clearblue px-4 py-2 border border-solid border-eccblue   rounded-md font-semibold text-eccblue">
										<Link href={"/login"}>
											<p>Login</p>
										</Link>
									</button>
								</div>
								<div>
									<button className="bg-eccblue px-4 py-2 rounded-md font-semibold text-white">
										<Link href={"/signup"}>
											<p>Signup</p>
										</Link>
									</button>
								</div>
							</div>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
};
