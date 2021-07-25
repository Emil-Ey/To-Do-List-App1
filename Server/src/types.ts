import { Request, Response } from "express";
import { Session, SessionData } from "express-session";
import { Redis } from "ioredis";
import { createListLoader } from "./utils/createListLoader";
import { createUserLoader } from "./utils/createUserLoader";

export type MyContext = {
	req: Request & {
		session: Session & Partial<SessionData> & { userId?: number };
	};
	res: Response;
	redis: Redis;
	userLoader: ReturnType<typeof createUserLoader>;
	listLoader: ReturnType<typeof createListLoader>;
};
