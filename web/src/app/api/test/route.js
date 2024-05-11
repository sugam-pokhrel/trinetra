import { NextResponse } from 'next/server'
import { getServerSession } from "next-auth/next"
import prisma from '../../../../libs/prisma'

export async function GET(request) {
  const session = await getServerSession(request)

  console.log(session)
  let data = await prisma.images.findMany({
    where: {
      owner: session.user.email
    }
  })
  console.log(data)

  return NextResponse.json({ msg: data })
}

export async function POST(request) {
  const session = await getServerSession(request)

  console.log(session.user.email)
  const res = await request.json()
  console.log(res)

  let count = await prisma.count.findFirst({
    where: {
      owner: session.user.email,
    }
  })

  console.log(count)

  let countuid = null;

  if (count === null) {
    count = 1;
  } else {
    countuid = count.id;
    count = parseInt(count.count) + 1;
  }

  try {
    // Update or create count record
    if (!countuid) {
      await prisma.count.create({
        data: {
          count: count,
          owner: session.user.email
        }
      });
    } else {
      await prisma.count.update({
        where: {
          id: countuid
        },
        data: {
          count: count
        }
      });
    }

    // Create new image record
    await prisma.images.create({
      data: {
        name: res.name,
        url: res.url,
        owner: session.user.email,
        index: parseInt(count)
      }
    });

    return NextResponse.json({ msg: 'Success' });
  } catch (e) {
    console.error(e);
    return NextResponse.error(new Error('Error'));
  }
}
