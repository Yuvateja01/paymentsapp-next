"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { useState } from "react";
import { TextInput } from "@repo/ui/textinput";
import { peerTransfer } from "../app/lib/actions/P2Ptransfer";

export const SendMoney =() => {
    const [amount,setamount] = useState(0)
    const [phoneNumber,setPhoneNumber] = useState("")
    return <Card title="Send Money">
    <div className="w-full">
        <TextInput label={"PhoneNumber"} placeholder={"PhoneNumber"} onChange={(value) => {
                setPhoneNumber(value)
        }} />
        <TextInput label={"Amount"} placeholder={"Amount"} onChange={(value) => {
                setamount(+value)
        }} />
        <div className="flex justify-center pt-4">
            <Button onClick={async() => {
                await peerTransfer(amount,phoneNumber)
            }}>
            Send Money
            </Button>
        </div>
    </div>
</Card>
}