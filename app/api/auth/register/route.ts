import  connectDb  from "@/lib/db";
import User from "@/model/user.model"
import {NextRequest, NextResponse} from "next/server";


export async function POST(request:NextRequest){
    try{
      const {name, email, password}=await request.json()
      await connectDb()
      let exitUser= await User.findOne({email})
      if(exitUser){
          return NextResponse.json(
            {message:"User already exit!"},
            {status:400}
          )
      }
    }catch(error){

    }
}

//  signup 