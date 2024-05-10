import { NextResponse } from 'next/server'
import { getServerSession } from "next-auth/next"
import { getSession } from 'next-auth/react'
import prisma from '../../../../libs/prisma'
export async function GET(request) {
  const session = await getServerSession(request)


  console.log(session)
  let data=await prisma.images.findMany({
    where:{
      owner:session.user.email
    }
  })
  console.log(data)

  return NextResponse.json({ msg: data })
}
//above are for the post andget route hahahhah
export async function POST(request) {
  const session = await getServerSession(request)

  console.log(session.user.email)
  const res = await request.json()
  console.log(res)

  try{


    let data=await prisma.images.create({
      data:{
        name:res.name,
        url:res.url,
        owner:session.user.email
       

      }
    })
  }catch(e){
    console.log(e)
    return NextResponse.error(new Error('Error'))
  }

  return NextResponse.json({ msg: 'Success' })

   
    
    
    }


