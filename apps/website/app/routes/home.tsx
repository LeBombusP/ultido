import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
	return [{ title: "Ultido" }, { name: "description", content: "Your ultimate todolist app!" }];
}

export default function Home() {
	return <h1>Hello world!</h1>;
}
