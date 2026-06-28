"use client";

import { MessagesSquare } from "lucide-react";
import OverViewBox from "./OverViewBox";

interface OverViewBoxesProps {}

const OverViewBoxes = ({}: OverViewBoxesProps) => {
  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-4 mb-8">
      <OverViewBox
        title="Client Requests"
        label="1 new"
        Icon={MessagesSquare}
        qty="3"
      />
      <OverViewBox
        title="Job Applications"
        label="1 new"
        Icon={MessagesSquare}
        qty="2"
      />
      <OverViewBox
        title="Team Chat"
        label="1 new"
        Icon={MessagesSquare}
        qty="4"
      />
      <OverViewBox
        title="Published Articles"
        label="1 draft"
        Icon={MessagesSquare}
        qty="1"
      />
    </div>
  );
};

export default OverViewBoxes;
