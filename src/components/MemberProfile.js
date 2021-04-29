import React from "react";

export default function MemberProfile(props) {
  return (
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
      <div className="px-6">
        <img
          alt="..."
          src={require("assets/img/" + props.name.toLowerCase().replace(" ", "_") + ".jpg").default}
          className="shadow-md rounded-full max-w-full mx-auto"
          style={{ maxWidth: "130px" }}
        />
        <div className="pt-3 text-center">
          <h5 className="text-xl font-bold">
            {props.name}
          </h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            {props.role}
          </p>
        </div>
      </div>
    </div>
  );
}