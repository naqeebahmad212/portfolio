import { PageWrapper } from "@/components/PageWrapper";
import { LayoutGrid } from "@/components/ui/layout-grid";
import React from "react";

const page = () => {
  return (
    // <PageWrapper>
    <LayoutGrid
      cards={[
        {
          id: 1,
          content: "this is exampele",
          className: "d",
          thumbnail:
            "https://images.unsplash.com/photo-1710587385034-c9fc2889eabc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 2,
          content: "this is exampele",
          className: "d",
          thumbnail:
            "https://images.unsplash.com/photo-1710587385034-c9fc2889eabc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 3,
          content: "this is exampele",
          className: "d",
          thumbnail:
            "https://images.unsplash.com/photo-1710587385034-c9fc2889eabc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },

        {
          id: 4,
          content: "this is exampele",
          className: "d",
          thumbnail:
            "https://images.unsplash.com/photo-1710587385034-c9fc2889eabc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },

        {
          id: 5,
          content: "this is exampele",
          className: "d",
          thumbnail:
            "https://images.unsplash.com/photo-1710587385034-c9fc2889eabc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ]}
    />
    // </PageWrapper>
  );
};

export default page;
