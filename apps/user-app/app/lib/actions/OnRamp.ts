"use server";
import db from "@repo/db/client"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"

export async function createOnRampTransaction(amount:number,provider:string){
    const session = await getServerSession(authOptions);
    const token = Math.random().toString();
    const userId = session.user.id;
    if(!userId){
        return {
            "message":"usernotloggedin"
        }
    }
    await db.onRampTransaction.create({
        data:{
            status:"Processing",
            provider:provider,
            userId:+userId,
            amount:amount,
            startTime : new Date(),
            token:token
        }

    })
}