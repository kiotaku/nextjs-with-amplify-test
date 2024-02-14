import { NextResponse } from "next/server"

export const GET = async (request: Request, context: { params: { user_id: string } }) => {
  const users = [
    {
      name: 'user1',
      id: 1
    },
    {
      name: 'user2',
      id: 2
    }
  ]
  return NextResponse.json(users.find(user => user.id === parseInt(context.params.user_id)), { status: 200 })
}