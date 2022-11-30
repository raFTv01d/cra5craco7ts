import { FC } from "react";

export const SimpleTS: FC<{ smile: string }> = ({ smile = "" }) => {
  return <div>SimpleTS {smile}</div>;
};
