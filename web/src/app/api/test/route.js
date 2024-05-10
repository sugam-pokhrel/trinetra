import { NextResponse } from 'next/server'
 
export async function GET(request) {
  return NextResponse.json({ msg: 'Hello from server' })
}
//above are for the post andget route hahahhah
export async function POST(request) {
    let name=request.body.get('name')

    let url=request.body.url;
    
    return NextResponse.json({ msg: 'Hello from server'+url })
    }


