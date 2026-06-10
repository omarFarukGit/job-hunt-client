import React from "react";
import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";
import { h1 } from "motion/react-client";

const Apply = async ({ params }) => {
  const { id } = await params;
  const user = await getUserSession();

  if (!user) {
    redirect(`/signin?redirect=/jobs/${id}/apply`);
  }
  if(user.role !== 'seeker'){
    return (
        <h1>only job seeker apply this</h1>
    )
  }
  return <div>apply page</div>;
};

export default Apply;
