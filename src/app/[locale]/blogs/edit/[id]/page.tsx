"use client";

import { useParams } from "next/navigation";

interface pageProps {}

const page = ({}: pageProps) => {
  const {id} = useParams();
  // console.log("🚀 ~ page ~ params:", id)
  
  return <div>page</div>;
};

export default page;
