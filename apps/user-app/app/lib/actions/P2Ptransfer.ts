"use server";
import db from "@repo/db/client"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"


async function getUserID(phoneNumber:string){
const user = await db.user.findUnique({
    where:{
        number:phoneNumber,
    }
})
return user
}

export async function peerTransfer(amount:number,phoneNumber:string){
    const session = await getServerSession(authOptions);
    try{
        const user = await getUserID(phoneNumber)
        if (!user){
            return {
            "message":"user with number not found"
        }
        }
        await db.$transaction([
                 db.balance.update({
                    where:{
                        userId:Number(user.id)
                    },
                    data:{
                        amount:{
                            increment:amount,
                        }
                    }
                }),
                db.balance.update({
                    where:{
                        userId:Number(session.user.id)
                    },
                    data:{
                        amount:{
                            decrement:amount,
                        }
                    }
                })
        ]);
        return {
            "message":"transfer Successful"
        }
    } 
    catch(error){
        console.log("Transaction failed:", error);
        return {
            "message":"transaction failed"+error
        }
    }    
}