import React from "react";
import useResourceList from "./useResourceList";

const ResourceList = ({ resource }) => {
  const resources = useResourceList(resource);

  return (
    <div>
      <ul>
        {resources.map((record) => {
          return <li key={record.id}>{record.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default ResourceList;
