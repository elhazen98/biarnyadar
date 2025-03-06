import { aiAction } from "./action";

export default async function Page({ params }) {
  const { id } = await params;
  const response = await aiAction();
  console.log(response);
  return <div>{id}</div>;
}
