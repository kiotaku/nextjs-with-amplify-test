import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
  return NextResponse.json({
    users: [
      {
        name: 'user1',
        id: 1
      },
      {
        name: 'user2',
        id: 2
      }
    ]
  }, { status: 200 })
}