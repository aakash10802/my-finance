import { Hono } from "hono";
import { clerkMiddleware,getAuth } from "@hono/clerk-auth";

import { db } from "@/db/dirzzle";
import { accounts } from "@/db/schema";


const app = new Hono().get(
    "/",
    clerkMiddleware(),
    async(c)=>{
    const auth =getAuth(c)
    if(!auth?.userId){
        return c.json({
            error:"unauthorized"
        },401);
    }
     const data =await db.select({
        id: accounts.id,
        name: accounts.name,
     })
     .from(accounts);
     
    
    return c.json({data});
});


export default app;