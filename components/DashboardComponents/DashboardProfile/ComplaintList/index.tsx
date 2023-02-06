import { useState } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";

import { Dispatch, SetStateAction } from "react";
import PreviousNextButton from "../PreviousNextButton";
import { ComplaintContext } from "./../../../Contexts/ComplaintContext";

interface ComplaintProps {
	page: string;
	pageNumber: number;
	setPageNumber: Dispatch<SetStateAction<number>>;
}

const ComplaintList: React.FC<ComplaintProps> = ({ page, pageNumber, setPageNumber }) => {
	const { userComplaints } = useContext(ComplaintContext);

	const [maxNumber, setMaxNumber] = useState(3);

	const filteredList = userComplaints.filter((complaint) => complaint.status == page);

	const list = filteredList.length === 0 ? userComplaints : filteredList;
	const router = useRouter();

	return (
		<div className="w-full h-full mt-6 pb-6 px-2">
			{list.length > -1 && list.length > 5 ? (
				<ul className=" mx-auto">
					{list.slice((pageNumber - 1) * maxNumber, maxNumber * pageNumber).map((complaint, index) => (
						<div key={index}>
							<li
								className="flex flex-col mx-auto ml-4 mb-6 cursor-pointer"
								onClick={() => {
									router.push({ pathname: "/dashboard/complaintDetails/", query: { id: complaint.grievanceId } });
								}}
							>
								<p className=" mt-2 text-[12px] lg:text-[16px] text-gray-500">{`${complaint.description.split(" ").splice(0, 12).join(" ")}...`}</p>
								<div className={`mt-4 text-white text-[12px] w-[75px] flex items-center justify-center rounded-md h-[35px] p-2 ${complaint.status === "Open" && " bg-[#EF2E2E]"} ${complaint.status === "Resolved" && " bg-success"} ${complaint.status === "Closed" && " bg-[#666666]"} ${complaint.status === "Pending" && " bg-[#FFB330]"}`}>{complaint.status}</div>
							</li>
						</div>
					))}
				</ul>
			) : (
				<ul className=" mx-auto">
					{list.map((complaint, index) => (
						<li
							key={index}
							className="flex flex-col mx-auto ml-4 mb-6"
							onClick={() => router.push("/dashboard/complaintDetails/" + complaint.grievanceId)}
						>
							<p className=" mt-2 text-[12px] text-gray-500">{`${complaint.description.split(" ").slice(0, 12).join(" ")}...`}</p>
							<div className={`mt-4 text-white text-[12px] w-[75px] flex items-center justify-center rounded-md h-[35px] p-2 ${complaint.status === "Open" && " bg-[#EF2E2E]"} ${complaint.status === "Resolved" && " bg-success"} ${complaint.status === "Closed" && " bg-[#666666]"} ${complaint.status === "Pending" && " bg-[#FFB330]"}`}>{complaint.status}</div>
						</li>
					))}
				</ul>
			)}

			<PreviousNextButton
				maxNumber={maxNumber}
				setPageNumber={setPageNumber}
				listLength={list.length}
				pageNumber={pageNumber}
			/>
		</div>
	);
};

export default ComplaintList;
