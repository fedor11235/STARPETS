import request from 'request'
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// const port = process.env.PORT_USER
// const url = `http://localhost:${port}/user`

// const requestPromise = (url, method, json) => {
//   return (new Promise(function(resolve, reject) {
//     request({url, method, json}, (err, res, body)=>resolve(body));
//   }))
// }

export async function createUser(data) {
  // const urlCreatedUser = `${url}/create`
  // const user = await requestPromise(urlCreatedUser, 'POST', data)
  // const userHistory = await prisma.history.create({
  //   data: {
  //     action: 'create',
  //     id_user: user.id,
  //     name: user.name,
  //     surname: user.surname
  //   },
  // })
  return 'userHistory';
}

export async function updateUser(id, data) {
  // const urlUpdateUser = `${url}/update/${id}`
  // const user = await requestPromise(urlUpdateUser, 'PUT', data)
  // const userHistory = await prisma.history.create({
  //   data: {
  //     action: 'update',
  //     id_user: user.id,
  //     name: user.name,
  //     surname: user.surname
  //   },
  // })
  return 'userHistory';
}

export async function getHistory(data) {
  const idWhere = data.id ? {id_user: Number(data.id)}: {}
  const perPage = data.perPage? Number(data.perPage): 10
  const pageNumber = data.pageNumber? Number(data.pageNumber) - 1: 0
  // const history = await prisma.history.findMany({
  //   where: idWhere,
  //   skip: perPage * pageNumber,
  //   take: perPage,
  // })
  return 'history';
}

