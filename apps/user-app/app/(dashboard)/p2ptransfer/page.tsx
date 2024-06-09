import prisma from "@repo/db/client"
import { SendMoney } from "../../../components/SendMoneyCard"


export default async()=>{

 return <div className="w-screen">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
            P2PTransfer
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
            <div>
                <SendMoney/>
            </div>
        </div>
        </div>
}