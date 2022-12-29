import Link from "next/link";
import { NextPage } from "next";
import MenuLink from "../Menu/menuLinks";
import { useRouter } from "next/router";
import { Dispatch } from "react";
import { SetStateAction } from "react";
// import { boolean } from "joi";
import Image from "next/image";

interface MenuProps {
	setExpand: Dispatch<SetStateAction<boolean>>;
	expand: boolean;
}

const Menu: NextPage<MenuProps> = ({ setExpand, expand }) => {
	const router = useRouter();
	return (
		<>
			<div className="h-screen w-screen fixed z-20 bg-clearblue">
				<header className="h-1/6">
					<div className="flex items-center h-20">
						<Link href="/">
							<img
								src="/Images/logo.svg"
								className="-ml-[10px] h-32 w-32"
								alt="Adetunji's Adeyinka's Logo"
							/>
						</Link>
					</div>
				</header>

				<div className="flex flex-col items-center  justify-around h-5/6 ">
					<div className=" items-center">
						<ul className="flex flex-col  items-center h-full justify-between">
							<MenuLink
								name="Write a complaint letter"
								href="/write-complaint"
							/>
							<MenuLink
								name="Complaints"
								href="/complaints"
							/>
							<MenuLink
								name="Latest scams"
								href="/latest"
							/>
							<MenuLink
								name="Statistics"
								href="/statistics"
							/>
						</ul>
					</div>

					<div className="flex flex-row items-start p-1 gap-4">
						<div>
							<button className="bg-eccblue  w-40 h-11 rounded-md font-semibold text-white">
								<Link href={"/login"}>
									<p>Login</p>
								</Link>
							</button>
						</div>
						<div>
							<button className="bg-clearblue w-[142.27px] h-11 border border-solid border-eccblue   rounded-md font-semibold text-eccblue">
								<Link href={"/signup"}>
									<p>Signup</p>
								</Link>
							</button>
						</div>
					</div>

					<div>
						<div>
							<button
								onClick={() => {
									setExpand(!expand);
								}}
								className="bg-eccblue w-12 h-12  rounded-[27.5px] font-semibold text-white"
							>
								<Image
									src="/../../icons/close.svg"
									alt="exit icon"
									width={100}
									height={100}
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Menu;
