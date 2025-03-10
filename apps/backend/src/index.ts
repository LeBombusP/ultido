import { Hono } from "hono";
import { auth } from "./lib/auth";

const app = new Hono().basePath("/api/v0");

app.on(["POST", "GET"], "/auth/**", (c) => auth.handler(c.req.raw));

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

export default app;
