import React from "react";
import { useParams } from "react-router-dom";

export default function ResponsePayment() {
	const { status } = useParams();
	return <div>{status}</div>;
}
