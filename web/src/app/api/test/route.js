import { NextResponse } from 'next/server'
import { getServerSession } from "next-auth/next"
import { getSession } from 'next-auth/react'
export async function GET(request) {
  const session = await getServerSession(request)

  console.log(session)
  return NextResponse.json({ msg: 'Hello from server' })
}
//above are for the post andget route hahahhah
export async function POST(request) {
  const session=await getSession({req:request})
  console.log(session)
    let name=request.body.get('name')

    let url=request.body.url;
    
    return NextResponse.json({ msg: 'Hello from server'+url })
    }


