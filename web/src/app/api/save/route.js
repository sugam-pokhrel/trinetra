import { NextResponse } from 'next/server'
import { getServerSession } from "next-auth/next"
import prisma from '../../../../libs/prisma'

export async function GET(request) {
  const session = await getServerSession(request)

  console.log(session)
  let data = await prisma.log.findMany({
    where: {
      owner: session.user.email
    }
  })
  console.log(session)
  console.log(data)

  return NextResponse.json({ msg: data })
}

export async function POST(request) {

    try{
        let data=await request.json()
    console.log(data)

    let prim=await prisma.log.create({
        data: {
            owner: data.email,
            url: data.imgbb_url
        }
        })

    return NextResponse.json({ msg: prim })   

        
    }catch (err){
        console.log(err)
        return NextResponse.json({ msg: err })
    }
    
    

    

}
